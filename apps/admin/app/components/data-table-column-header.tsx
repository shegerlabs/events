import type { Column } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react'
import { useSearchParams, useSubmit } from 'react-router'

import { Button } from '~/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { cn } from '~/lib/utils'

interface DataTableColumnHeaderProps<TData, TValue>
	extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>
	title: string
}

export function DataTableColumnHeader<TData, TValue>({
	column,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>) {
	const [searchParams] = useSearchParams()
	const submit = useSubmit()

	if (!column.getCanSort()) {
		return <div className={cn(className)}>{title}</div>
	}

	const handleSort = (direction: 'asc' | 'desc') => {
		// Update the column's sort state immediately
		column.toggleSorting(direction === 'desc')

		const formData = new FormData()
		formData.append('sortBy', column.id)
		formData.append('sortDirection', direction)

		// Preserve existing search params
		for (const [key, value] of searchParams.entries()) {
			if (key !== 'sortBy' && key !== 'sortDirection') {
				formData.append(key, value)
			}
		}

		submit(formData, { method: 'GET' })
	}

	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="data-[state=open]:bg-accent -ml-3 h-8"
					>
						<span>{title}</span>
						{column.getIsSorted() === 'desc' ? (
							<ArrowDown />
						) : column.getIsSorted() === 'asc' ? (
							<ArrowUp />
						) : (
							<ChevronsUpDown />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => handleSort('asc')}>
						<ArrowUp className="text-muted-foreground/70 h-3.5 w-3.5" />
						Asc
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => handleSort('desc')}>
						<ArrowDown className="text-muted-foreground/70 h-3.5 w-3.5" />
						Desc
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
