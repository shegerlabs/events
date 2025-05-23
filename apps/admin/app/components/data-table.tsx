'use client'

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
import { DataTablePagination } from './data-table-pagination'
import { DataTableViewOptions } from './data-table-view-options'

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	initialState?: {
		pagination: {
			pageIndex: number
			pageSize: number
		}
		columnVisibility: Record<string, boolean>
	}
}

export function DataTable<TData, TValue>({
	columns,
	data,
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
		state: {
			rowSelection,
		},
	})

	return (
		<div className="flex flex-col gap-4">
			<DataTableViewOptions table={table} />

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
										<TableCell
											key={cell.id}
											data-label={cell.column.columnDef.header}
										>
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

			<DataTablePagination table={table} />
		</div>
	)
}
