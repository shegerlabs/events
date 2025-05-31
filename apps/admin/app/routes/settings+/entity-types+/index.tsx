import { prisma, type EntityType } from '@repo/database'
import { type ColumnDef } from '@tanstack/react-table'
import { AlertCircle, MoreHorizontal } from 'lucide-react'
import { data } from 'react-router'
import { DataTable } from '~/components/data-table'
import { DataTableColumnHeader } from '~/components/data-table-column-header'
import { ErrorCard, GeneralErrorBoundary } from '~/components/error-boundary'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { createSearch } from '~/lib/search.server'
import type { Route } from './+types'

export const loader = async ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url)
	const search = url.searchParams.get('search')

	const entityTypeService = createSearch(prisma.entityType)

	const entityTypes = await entityTypeService.findWithOffset(
		{ page: 1, pageSize: 10 },
		{
			searchFields: search
				? [{ field: 'name', value: search, operator: 'contains' }]
				: [],
		},
	)

	return data({ entityTypes })
}

const columns: ColumnDef<EntityType>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={value => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
	},
	{
		accessorKey: 'description',
		header: 'Description',
	},
	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => {
			const entityType = row.original
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 cursor-pointer p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem className="cursor-pointer">View</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export default function IndexRoute({ loaderData }: Route.ComponentProps) {
	const { entityTypes } = loaderData

	return (
		<DataTable
			columns={columns}
			data={entityTypes.items}
			initialState={{
				pagination: { pageIndex: 0, pageSize: 10 },
				columnVisibility: {},
			}}
		/>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: ({ error }) => (
					<ErrorCard
						title="Access Denied"
						description="You don't have permission to access the settings page."
						details={error?.data?.message}
						icon={<AlertCircle size={80} className="text-orange-500" />}
					/>
				),
			}}
		/>
	)
}
