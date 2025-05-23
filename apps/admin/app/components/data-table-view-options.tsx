'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { type Table } from '@tanstack/react-table'
import { Search, Settings2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '~/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu'
import { Input } from '~/components/ui/input'

interface DataTableViewOptionsProps<TData> {
	table: Table<TData>
}

export function DataTableViewOptions<TData>({
	table,
}: DataTableViewOptionsProps<TData>) {
	const [selectedColumn, setSelectedColumn] = useState<string>('')
	const [filterValue, setFilterValue] = useState('')

	const handleFilterChange = (value: string) => {
		setFilterValue(value)
		if (selectedColumn) {
			table.getColumn(selectedColumn)?.setFilterValue(value)
		}
	}

	const handleColumnSelect = (columnId: string) => {
		setSelectedColumn(columnId)
		// Reset filter value when changing columns
		setFilterValue('')
		table.getColumn(columnId)?.setFilterValue('')
	}

	return (
		<div className="flex w-full items-center gap-2">
			<div className="flex flex-1 items-center gap-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							size="sm"
							className="h-8 whitespace-nowrap"
						>
							{selectedColumn || 'Select'}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" className="w-[150px]">
						<DropdownMenuLabel>Filter by column</DropdownMenuLabel>
						<DropdownMenuSeparator />
						{table
							.getAllColumns()
							.filter(column => column.getCanFilter())
							.map(column => {
								return (
									<DropdownMenuItem
										key={column.id}
										className="capitalize"
										onClick={() => handleColumnSelect(column.id)}
									>
										{column.id}
									</DropdownMenuItem>
								)
							})}
					</DropdownMenuContent>
				</DropdownMenu>
				<div className="relative flex-1">
					<Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
					<Input
						placeholder="Filter..."
						value={filterValue}
						onChange={e => handleFilterChange(e.target.value)}
						className="h-8 w-full pl-8"
					/>
				</div>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						size="sm"
						className="ml-auto hidden h-8 lg:flex"
					>
						<Settings2 className="mr-2 h-4 w-4" />
						View
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-[150px]">
					<DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{table
						.getAllColumns()
						.filter(
							column =>
								typeof column.accessorFn !== 'undefined' && column.getCanHide(),
						)
						.map(column => {
							return (
								<DropdownMenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={value => column.toggleVisibility(!!value)}
								>
									{column.id}
								</DropdownMenuCheckboxItem>
							)
						})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
