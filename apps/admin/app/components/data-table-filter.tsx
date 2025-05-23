'use client'

import { Search } from 'lucide-react'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'

// Sample fields with their types
const sampleFields = [
	{ id: 'all', label: 'All Fields', type: 'all' },
	{ id: 'id', label: 'ID', type: 'string' },
	{ id: 'email', label: 'Email', type: 'string' },
	{ id: 'status', label: 'Status', type: 'string' },
	{ id: 'amount', label: 'Amount', type: 'number' },
	{ id: 'createdAt', label: 'Date', type: 'date' },
]

export type FilterOption = {
	value: string
	label: string
}

export type AdditionalFilter = {
	id: string
	label: string
	options: FilterOption[]
}

export type FilterState = {
	search: {
		field: string
		term: string
	}
	additionalFilters: Record<string, string>
}

export type SimpleFilterProps = {
	onSearch: (filterState: FilterState) => void
	isLoading?: boolean
	additionalFilters?: AdditionalFilter[]
	extraButtons?: React.ReactNode
}

export type MatchType = 'exact' | 'contains'

export const SimpleFilter = ({
	onSearch,
	isLoading = false,
	additionalFilters = [],
	extraButtons,
}: SimpleFilterProps) => {
	const [field, setField] = useState<string>('all')
	const [term, setTerm] = useState<string>('')
	const [additionalFilterValues, setAdditionalFilterValues] = useState<
		Record<string, string>
	>({})

	// Initialize additional filter values
	useEffect(() => {
		const initialValues: Record<string, string> = {}
		additionalFilters.forEach(filter => {
			initialValues[filter.id] = ''
		})
		setAdditionalFilterValues(initialValues)
	}, [additionalFilters])

	const handleSearch = () => {
		onSearch({
			search: {
				field,
				term,
			},
			additionalFilters: additionalFilterValues,
		})
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && !isLoading) {
			handleSearch()
		}
	}

	const handleAdditionalFilterChange = (filterId: string, value: string) => {
		setAdditionalFilterValues(prev => ({
			...prev,
			[filterId]: value,
		}))

		// Auto-search when dropdown value changes
		setTimeout(() => {
			onSearch({
				search: {
					field,
					term,
				},
				additionalFilters: {
					...additionalFilterValues,
					[filterId]: value,
				},
			})
		}, 0)
	}

	return (
		<div className="flex w-full flex-wrap items-center gap-2">
			{/* Additional filter dropdowns first */}
			{additionalFilters.map(filter => (
				<Select
					key={filter.id}
					value={additionalFilterValues[filter.id] || 'all'}
					onValueChange={value =>
						handleAdditionalFilterChange(filter.id, value)
					}
				>
					<SelectTrigger className="h-9 w-[130px] text-sm">
						<SelectValue placeholder={filter.label} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All {filter.label}</SelectItem>
						{filter.options.map(option => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			))}

			{/* Field selector next */}
			<Select value={field} onValueChange={setField}>
				<SelectTrigger className="h-9 w-[150px] text-sm">
					<SelectValue placeholder="Select field" />
				</SelectTrigger>
				<SelectContent>
					{sampleFields.map(field => (
						<SelectItem key={field.id} value={field.id}>
							{field.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			{/* Search input and button last */}
			<Input
				className="h-9 min-w-[200px] flex-1 text-sm"
				placeholder="Search term..."
				value={term}
				onChange={e => setTerm(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			<div className="flex items-center gap-2">
				<Button
					onClick={handleSearch}
					disabled={isLoading}
					size="sm"
					variant="outline"
					aria-label="Search"
				>
					{isLoading ? (
						<div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
					) : (
						<Search className="h-3.5 w-3.5" />
					)}
				</Button>

				{/* Extra buttons */}
				{extraButtons}
			</div>
		</div>
	)
}
