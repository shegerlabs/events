import { prisma, type EntityType } from '@repo/database'
import { AlertCircle } from 'lucide-react'
import { data, useNavigate } from 'react-router'
import { DataTable } from '~/components/data-table'
import { createColumns } from '~/components/data-table-columns'
import { ErrorCard, GeneralErrorBoundary } from '~/components/error-boundary'
import { createSearch } from '~/lib/search.server'
import type { Route } from './+types'

export const loader = async ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url)
	const search = url.searchParams.get('search')
	const page = Number(url.searchParams.get('page')) || 1
	const pageSize = Number(url.searchParams.get('pageSize')) || 2
	const sortBy = url.searchParams.get('sortBy')
	const sortDirection = url.searchParams.get('sortDirection') as
		| 'asc'
		| 'desc'
		| null

	const entityTypeService = createSearch(prisma.entityType)

	const result = await entityTypeService.findWithOffset(
		{ page, pageSize },
		{
			searchFields: search
				? [{ field: 'name', value: search, operator: 'contains' }]
				: [],
			orderBy: sortBy
				? [
						{
							field: sortBy as keyof EntityType,
							direction: sortDirection || 'asc',
						},
					]
				: [
						{
							field: 'name',
							direction: 'asc',
						},
					],
		},
	)

	return data({
		entityTypes: result.items,
		totalCount: result.totalCount,
		page,
		pageSize,
	})
}

export default function IndexRoute({ loaderData }: Route.ComponentProps) {
	const { entityTypes, totalCount, page, pageSize } = loaderData
	const navigate = useNavigate()

	return (
		<DataTable
			handler="/settings/entity-types"
			data={entityTypes}
			page={page}
			pageSize={pageSize}
			totalCount={totalCount}
			selectable
			defaultSort={{ id: 'name', desc: false }}
			columns={createColumns<EntityType>([
				{
					type: 'text',
					field: 'name',
					label: 'Name',
					sortable: true,
				},
				{
					type: 'text',
					field: 'description',
					label: 'Description',
					sortable: true,
				},
				{
					type: 'actions',
					label: 'Actions',
					actions: [
						{
							label: 'View',
							onClick: data => navigate(`/settings/entity-types/${data.id}`),
						},
						{
							label: 'Edit',
							onClick: data =>
								navigate(`/settings/entity-types/${data.id}/edit`),
						},
						{
							label: 'Delete',
							onClick: data => {
								if (
									confirm('Are you sure you want to delete this entity type?')
								) {
									// TODO: Implement delete functionality
									console.log('Delete', data)
								}
							},
						},
					],
				},
			])}
			extras={[
				{
					label: 'New',
					type: 'link',
					to: '/settings/entity-types/new',
					icon: 'plus',
				},
			]}
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
