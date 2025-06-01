import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table'
import React from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/components/ui/table'
import DataTableFilter from './data-table-filter'
import { DataTablePagination } from './data-table-pagination'

interface DataTableProps<TData, TValue> {
	handler: string
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	page: number
	pageSize: number
	totalCount: number
	initialState?: {
		columnVisibility: Record<string, boolean>
	}
}

export function DataTable<TData, TValue>({
	handler,
	columns,
	data,
	page,
	pageSize,
	totalCount,
	initialState,
}: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = React.useState({})

	const table = useReactTable({
		data,
		columns,
		initialState,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onRowSelectionChange: setRowSelection,
		manualPagination: true,
		state: {
			rowSelection,
			pagination: {
				pageIndex: page - 1,
				pageSize,
			},
		},
	})

	return (
		<div className="flex flex-col gap-4">
			<DataTableFilter handler={handler} status="idle" />

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<DataTablePagination
				currentPage={page}
				pageSize={pageSize}
				totalCount={totalCount}
			/>
		</div>
	)
}
