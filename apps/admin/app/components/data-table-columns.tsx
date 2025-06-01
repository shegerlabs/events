import type { Column, ColumnDef, Row } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { DataTableColumnHeader } from './data-table-column-header'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

interface BaseColumnConfig {
	label: string
	sortable?: boolean
}

interface TextColumnConfig extends BaseColumnConfig {
	type: 'text'
	field: string
}

interface ActionColumnConfig<TData> extends BaseColumnConfig {
	type: 'actions'
	actions: Array<{
		label: string
		onClick: (data: TData) => void
	}>
}

type ColumnConfig<TData> = TextColumnConfig | ActionColumnConfig<TData>

export const columnRegistry = {
	text: (config: TextColumnConfig) => ({
		accessorKey: config.field,
		header: ({ column }: { column: Column<unknown> }) => (
			<DataTableColumnHeader column={column} title={config.label} />
		),
		enableSorting: config.sortable ?? true,
	}),

	actions: function <TData>(config: ActionColumnConfig<TData>) {
		return {
			id: 'actions',
			header: config.label,
			cell: ({ row }: { row: Row<TData> }) => {
				const data = row.original
				return (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 cursor-pointer p-0">
								<span className="sr-only">Open menu</span>
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{config.actions.map(action => (
								<DropdownMenuItem
									key={action.label}
									className="cursor-pointer"
									onClick={() => action.onClick(data)}
								>
									{action.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				)
			},
			enableSorting: false,
		}
	},
}

export function createColumns<TData>(
	configs: ColumnConfig<TData>[],
): ColumnDef<TData>[] {
	return configs.map(config => {
		switch (config.type) {
			case 'text':
				return columnRegistry.text(config) as ColumnDef<TData>
			case 'actions':
				return columnRegistry.actions<TData>(config) as ColumnDef<TData>
			default:
				throw new Error(`Unknown column type: ${(config as any).type}`)
		}
	})
}
