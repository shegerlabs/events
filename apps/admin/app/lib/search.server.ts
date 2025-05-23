/**
 * @fileoverview
 * Core search implementation with .
 * Provides robust search functionality with support for complex queries,
 * filtering, pagination, and type-safe operations.
 *
 * This file contains both the implementation and all related type definitions
 * for a self-contained search solution.
 *
 * @example Basic Usage
 * ```typescript
 * import { createSearch } from './search.server'
 *
 * const userSearchService = createSearch<User>(.user)
 *
 * try {
 *   // Simple search with cursor pagination
 *   const results = await userSearchService.findWithCursor(
 *     { first: 10 },
 *     {
 *       searchFields: [
 *         { field: 'name', operator: 'contains', value: 'John' }
 *       ],
 *       orderBy: [{ field: 'createdAt', direction: 'desc' }]
 *     }
 *   )
 * } catch (error) {
 *   handleSearchError(error)
 * }
 *
 * // Offset-based pagination with filters
 * const results = await userSearchService.findWithOffset(
 *   { page: 1, pageSize: 20 },
 *   {
 *     searchFields: [
 *       { field: 'name', operator: 'contains', value: 'John' }
 *     ],
 *     filterFields: [
 *       { field: 'status', operator: 'equals', value: 'ACTIVE' }
 *     ]
 *   }
 * )
 * ```
 */

/**
 * Parameters for cursor-based pagination following the Relay specification.
 * Supports both forward (first/after) and backward (last/before) pagination.
 *
 * @example Forward Pagination
 * ```typescript
 * const forwardParams: CursorPaginationParams = {
 *   first: 10,
 *   after: 'cursor-id'
 * }
 * ```
 *
 * @example Backward Pagination
 * ```typescript
 * const backwardParams: CursorPaginationParams = {
 *   last: 10,
 *   before: 'cursor-id'
 * }
 * ```
 */
export interface CursorPaginationParams {
	/** Number of items to take from the beginning */
	first?: number
	/** Cursor to start after (exclusive) */
	after?: string
	/** Number of items to take from the end */
	last?: number
	/** Cursor to start before (exclusive) */
	before?: string
}

/**
 * Parameters for traditional offset-based pagination.
 *
 * @example
 * ```typescript
 * const params: OffsetPaginationParams = {
 *   page: 2,
 *   pageSize: 20
 * }
 * ```
 */
export interface OffsetPaginationParams {
	/** Current page number (1-based) */
	page?: number
	/** Number of items per page */
	pageSize?: number
}

/** Sort order for ordering results */
export type SortOrder = 'asc' | 'desc'

/**
 * Input for ordering results by a specific field.
 *
 * @example Single Field Ordering
 * ```typescript
 * const orderBy: OrderByInput = {
 *   field: 'createdAt',
 *   order: 'desc'
 * }
 * ```
 *
 * @example Multiple Fields Ordering
 * ```typescript
 * const orderBy: OrderByInput[] = [
 *   { field: 'priority', order: 'desc' },
 *   { field: 'createdAt', order: 'asc' }
 * ]
 * ```
 */
export interface OrderByInput<T extends BaseModel = any> {
	field: keyof T
	direction: 'asc' | 'desc'
}

/**
 * Enhanced search operators for complex queries.
 * Supports text, numeric, date, and array operations.
 *
 * @example Text Search
 * ```typescript
 * const nameSearch: SearchOperator = {
 *   contains: 'John',
 *   mode: 'insensitive'
 * }
 * ```
 *
 * @example Date Range
 * ```typescript
 * const dateRange: SearchOperator = {
 *   gte: new Date('2023-01-01'),
 *   lt: new Date('2024-01-01')
 * }
 * ```
 *
 * @example Array Operations
 * ```typescript
 * const tagSearch: SearchOperator = {
 *   containsAll: ['typescript', 'react']
 * }
 * ```
 */
export interface SearchOperator {
	contains?: string
	equals?: string | number | boolean | Date
	notEquals?: string | number | boolean | Date
	startsWith?: string
	endsWith?: string
	notContains?: string
	in?: (string | number | boolean | Date)[]
	notIn?: (string | number | boolean | Date)[]
	lt?: number | Date
	lte?: number | Date
	gt?: number | Date
	gte?: number | Date
	isNull?: boolean
	isNotNull?: boolean
	containsAll?: any[]
	containsNone?: any[]
	containsAny?: any[]
}

/**
 * Represents a logical group of search conditions.
 * Allows for complex nested conditions using AND and OR operators.
 *
 * @example Complex Search Group
 * ```typescript
 * const searchGroup: SearchGroup = {
 *   operator: 'AND',
 *   fields: [
 *     { field: 'username', value: 'john', operator: 'contains' },
 *     {
 *       operator: 'OR',
 *       fields: [
 *         { field: 'userStatusId', value: 'usr_active', operator: 'equals' },
 *         { field: 'userStatusId', value: 'usr_inactive', operator: 'equals' }
 *       ]
 *     }
 *   ]
 * }
 * ```
 */
export interface SearchGroup<T extends BaseModel = any> {
	operator: 'AND' | 'OR'
	fields: SearchField<T>[]
}

/**
 * Enhanced search field with support for nested paths, JSON fields, and value transformation.
 *
 * @example Basic Field Search
 * ```typescript
 * const basicSearch: SearchField = {
 *   field: 'name',
 *   operator: { contains: 'John' }
 * }
 * ```
 *
 * @example Nested Field Search
 * ```typescript
 * const nestedSearch: SearchField = {
 *   field: ['user', 'profile', 'bio'],
 *   operator: { contains: 'developer' }
 * }
 * ```
 *
 * @example Search with Transformation
 * ```typescript
 * const transformedSearch: SearchField = {
 *   field: 'email',
 *   operator: { contains: '@GMAIL.COM' },
 *   transform: (value) => value.toLowerCase()
 * }
 * ```
 */
export interface SearchField<T extends BaseModel = any> {
	field: keyof T
	value: string
	operator?: 'contains' | 'startsWith' | 'endsWith' | 'equals'
}

export interface FilterField<T extends BaseModel = any> {
	field: keyof T
	value: any
	operator?:
		| 'equals'
		| 'not'
		| 'in'
		| 'notIn'
		| 'lt'
		| 'lte'
		| 'gt'
		| 'gte'
		| 'contains'
		| 'startsWith'
		| 'endsWith'
}

export type FilterOperator =
	| 'equals'
	| 'notEquals'
	| 'in'
	| 'notIn'
	| 'contains'
	| 'notContains'
	| 'between'
	| 'notBetween'
	| 'array-contains'
	| 'array-contains-any'
	| 'array-contains-all'
	| 'array-contains-none'
	| 'exists'
	| 'notExists'

/**
 * Complete search options configuration.
 *
 * @example Complete Search Configuration
 * ```typescript
 * const options: SearchOptions<User> = {
 *   searchFields: [
 *     { field: 'name', operator: { contains: 'John' } }
 *   ],
 *   filterFields: [
 *     { field: 'status', operator: 'equals', value: 'ACTIVE' }
 *   ],
 *   orderBy: [{ field: 'createdAt', order: 'desc' }],
 *   include: {
 *     profile: true,
 *     posts: {
 *       where: { published: true },
 *       select: { title: true }
 *     }
 *   },
 * }
 * ```
 */
export interface BaseModel {
	id: string
}

export interface SearchOptions<T extends BaseModel = any> {
	searchFields?: (SearchField<T> | SearchGroup<T>)[]
	filterFields?: FilterField<T>[]
	orderBy?: OrderByInput<T>[]
	select?: Record<string, boolean | Record<string, boolean>>
	include?: Record<string, boolean | Record<string, any>>
	// Pagination parameters
	first?: number
	after?: string
	page?: number
	limit?: number
}

export interface Edge<T extends BaseModel> {
	node: T
	cursor: string
}

export interface PageInfo {
	hasNextPage: boolean
	endCursor?: string
}

export interface Connection<T extends BaseModel> {
	edges: Edge<T>[]
	pageInfo: PageInfo
	totalCount: number
}

export type SearchResultValidator<T> = {
	[K in keyof T]: (value: T[K]) => boolean
}

export type FilterBuilder<T extends BaseModel> = {
	[K in keyof T]: {
		equals: (value: T[K]) => FilterField<T>
		contains: (value: string) => FilterField<T>
		between: (start: T[K], end: T[K]) => FilterField<T>
		in: (values: T[K][]) => FilterField<T>
	}
}

export type FieldPaths<T> = {
	[K in keyof T]: T[K] extends Record<string, any>
		? `${K & string}` | `${K & string}.${string}`
		: `${K & string}`
}[keyof T]

export type WhereInput = {
	AND?: WhereInput | WhereInput[]
	OR?: WhereInput | WhereInput[]
	NOT?: WhereInput | WhereInput[]
	id?: string | { equals?: string; in?: string[]; notIn?: string[] }
	[key: string]: any
}

export type FindManyArgs<T extends BaseModel> = {
	where?: WhereInput
	orderBy?: Record<string, any>[]
	take?: number
	skip?: number
	cursor?: { id: string }
	select?: Record<string, boolean | Record<string, boolean>>
	include?: Record<string, boolean | Record<string, any>>
}

export type CountArgs = {
	where?: WhereInput
}

export type AggregateArgs = {
	where?: WhereInput
	_avg?: Record<string, boolean>
	_min?: Record<string, boolean>
	_max?: Record<string, boolean>
}

export type GroupByArgs = {
	by: string[]
	where?: WhereInput
	_count?: boolean
}

export type CreateArgs<T extends BaseModel> = {
	data: Partial<T>
}

export type UpdateArgs<T extends BaseModel> = {
	where: WhereInput
	data: Partial<T>
}

export type DeleteArgs = {
	where: WhereInput
}

export type UpsertArgs<T extends BaseModel> = {
	where: WhereInput
	create: Partial<T>
	update: Partial<T>
}

export type Model<T extends BaseModel> = {
	findMany: (args?: any) => Promise<T[]>
	count: (args?: any) => Promise<number>
	aggregate: (args?: any) => Promise<any>
	groupBy: (args?: any) => Promise<any>
	create: (args: any) => Promise<T>
	update: (args: any) => Promise<T>
	delete: (args: any) => Promise<T>
	upsert: (args: any) => Promise<T>
}

/**
 * Base search error class that all specific search errors extend from.
 * Provides consistent error structure with error code and optional details.
 *
 * @example Creating Custom Error
 * ```typescript
 * throw new SearchError({
 *   code: 'VALIDATION_ERROR',
 *   message: 'Invalid search parameters',
 *   details: { field: 'name', issue: 'required' }
 * })
 * ```
 */
export class SearchError extends Error {
	code: 'VALIDATION_ERROR' | 'DATABASE_ERROR'
	details?: Record<string, any>

	constructor({
		code,
		message,
		details,
	}: {
		code: 'VALIDATION_ERROR' | 'DATABASE_ERROR'
		message: string
		details?: Record<string, any>
	}) {
		super(message)
		this.code = code
		this.details = details
	}
}

/**
 * Specific error class for validation-related errors.
 * Use when search parameters or filters are invalid.
 *
 * @example
 * ```typescript
 * // Invalid search field
 * throw new ValidationError(
 *   'Invalid search field operator',
 *   { field: 'status', operator: 'invalid', allowed: ['equals', 'contains'] }
 * )
 *
 * // Invalid filter value
 * throw new ValidationError(
 *   'Invalid enum value for status filter',
 *   { field: 'status', value: 'UNKNOWN', allowed: ['ACTIVE', 'INACTIVE'] }
 * )
 * ```
 */
export class ValidationError extends Error implements SearchError {
	code = 'VALIDATION_ERROR' as const
	details: Record<string, any>

	constructor(message: string, details: Record<string, any>) {
		super(message)
		this.details = details
	}
}

/**
 * Specific error class for database-related errors.
 * Use when database operations fail.
 *
 * @example
 * ```typescript
 * // Connection failure
 * throw new DatabaseError(
 *   'Failed to connect to database',
 *   { connectionString: '***', timeout: 5000 }
 * )
 *
 * // Query error
 * throw new DatabaseError(
 *   'Failed to execute search query',
 *   { query: 'SELECT ...', params: { userId: 123 }, error: originalError }
 * )
 * ```
 */
export class DatabaseError extends Error implements SearchError {
	code = 'DATABASE_ERROR' as const
	details: Record<string, any>

	constructor(message: string, details: Record<string, any>) {
		super(message)
		this.details = details
	}
}

/**
 * Error handler utility that provides consistent error handling across the application.
 * Logs errors appropriately based on their type and rethrows them.
 *
 * @param error - The error to handle
 * @throws {SearchError} Always throws the error after logging
 *
 * @example Basic Usage
 * ```typescript
 * try {
 *   await searchService.findWithCursor(params, options)
 * } catch (error) {
 *   handleSearchError(error)
 * }
 * ```
 *
 * @example With Custom Error Handler
 * ```typescript
 * try {
 *   const results = await searchService.findWithCursor(params, options)
 *   return results
 * } catch (error) {
 *   if (error instanceof ValidationError) {
 *     // Handle validation errors specially
 *     notifyUser(error.message)
 *   }
 *   handleSearchError(error)
 * }
 * ```
 *
 * @example With Error Monitoring
 * ```typescript
 * try {
 *   return await searchService.findWithCursor(params, options)
 * } catch (error) {
 *   // Send to error monitoring service
 *   Sentry.captureException(error)
 *   handleSearchError(error)
 * }
 * ```
 */
export function handleSearchError(error: unknown): never {
	if (error instanceof ValidationError) {
		console.warn('Validation error:', {
			message: error.message,
			details: error.details,
		})
		throw error
	}

	if (error instanceof DatabaseError) {
		console.error('Database error:', {
			message: error.message,
			details: error.details,
		})
		throw error
	}

	console.error('Unexpected error:', error)
	throw new Error('An unexpected error occurred during search')
}

export class SearchService<TData extends BaseModel> {
	public model: Model<TData>

	constructor(model: Model<TData>) {
		this.model = model
	}

	/**
	 * Validates search fields to ensure they have required properties.
	 *
	 * @example
	 * ```typescript
	 * // Valid search fields
	 * const validFields = [
	 *   { field: 'name', operator: 'contains', value: 'John' },
	 *   { field: 'email', operator: 'equals', value: 'john@example.com' }
	 * ]
	 *
	 * // Valid search groups
	 * const validGroups = [
	 *   {
	 *     operator: 'AND',
	 *     fields: [
	 *       { field: 'username', operator: 'contains', value: 'john' },
	 *       { field: 'email', operator: 'contains', value: '@example.com' }
	 *     ]
	 *   }
	 * ]
	 *
	 * // Invalid search fields (will throw error)
	 * const invalidFields = [
	 *   { field: '', operator: 'contains', value: 'John' }, // Missing field name
	 *   { field: 'email', value: 'john@example.com' } // Missing operator
	 * ]
	 * ```
	 */
	private validateSearchFields(
		fields?: (SearchField<TData> | SearchGroup<TData>)[],
	): void {
		if (!fields?.length) return

		for (const field of fields) {
			if (this.isSearchGroup(field)) {
				if (!field.operator) {
					throw new ValidationError('Group operator is required', { field })
				}
				if (!field.fields?.length) {
					throw new ValidationError('Group fields are required', { field })
				}
				// Recursively validate nested fields
				this.validateSearchFields(field.fields)
			} else {
				if (!field.field) {
					throw new ValidationError('Field name is required', { field })
				}
				if (!field.operator) {
					throw new ValidationError('Operator is required', { field })
				}
			}
		}
	}

	/**
	 * Validates filter fields to ensure they have required properties.
	 *
	 * @example
	 * ```typescript
	 * // Valid filter fields
	 * const validFilters = [
	 *   { field: 'age', operator: 'gte', value: 18 },
	 *   { field: 'status', operator: 'equals', value: 'ACTIVE' }
	 * ]
	 *
	 * // Invalid filter fields (will throw error)
	 * const invalidFilters = [
	 *   { field: 'age', value: 18 }, // Missing operator
	 *   { field: 'status', operator: 'equals' } // Missing value
	 * ]
	 * ```
	 */
	private validateFilterFields(fields?: FilterField<TData>[]): void {
		if (!fields?.length) return

		for (const field of fields) {
			if (!field.field) {
				throw new ValidationError('Field name is required', { field })
			}
			if (!field.operator) {
				throw new ValidationError('Operator is required', { field })
			}
			if (field.value === undefined) {
				throw new ValidationError('Value is required', { field })
			}
		}
	}

	/**
	 * Validates order by parameters to ensure they have required properties.
	 *
	 * @example
	 * ```typescript
	 * // Valid order by
	 * const validOrderBy = [
	 *   { field: 'createdAt', direction: 'desc' },
	 *   { field: 'name', direction: 'asc' }
	 * ]
	 *
	 * // Invalid order by (will throw error)
	 * const invalidOrderBy = [
	 *   { field: 'createdAt' }, // Missing direction
	 *   { field: 'name', direction: 'invalid' } // Invalid direction
	 * ]
	 * ```
	 */
	private validateOrderBy(orderBy?: OrderByInput<TData>[]): void {
		if (!orderBy?.length) return

		for (const order of orderBy) {
			if (!order.field) {
				throw new ValidationError('Field name is required', { order })
			}
			if (!order.direction || !['asc', 'desc'].includes(order.direction)) {
				throw new ValidationError('Direction must be either "asc" or "desc"', {
					order,
				})
			}
		}
	}

	/**
	 * Builds a  where clause from search and filter fields.
	 *
	 * @example
	 * ```typescript
	 * // Simple search
	 * const where = buildWhereClause(
	 *   [{ field: 'name', operator: 'contains', value: 'John' }],
	 *   [{ field: 'status', operator: 'equals', value: 'ACTIVE' }]
	 * )
	 * // Result: { OR: [{ name: { contains: 'John', mode: 'insensitive' } }], AND: [{ status: { equals: 'ACTIVE' } }] }
	 *
	 * // Complex search with groups
	 * const where = buildWhereClause([
	 *   {
	 *     operator: 'OR',
	 *     fields: [
	 *       { field: 'role', operator: 'equals', value: 'ADMIN' },
	 *       { field: 'role', operator: 'equals', value: 'MANAGER' }
	 *     ]
	 *   }
	 * ])
	 * // Result: { OR: [{ OR: [{ role: { equals: 'ADMIN' } }, { role: { equals: 'MANAGER' } }] }] }
	 * ```
	 */
	public buildWhereClause(
		searchFields?: (SearchField<TData> | SearchGroup<TData>)[],
		filterFields?: FilterField<TData>[],
	): WhereInput {
		this.validateSearchFields(searchFields as SearchField<TData>[])
		this.validateFilterFields(filterFields)
		const where: WhereInput = {}

		if (searchFields?.length) {
			where.OR = searchFields.map(field => this.processSearchCondition(field))
		}

		if (filterFields?.length) {
			where.AND = filterFields.map(field => this.processFilterCondition(field))
		}

		return where
	}

	/**
	 * Builds a  order by clause from order inputs.
	 *
	 * @example
	 * ```typescript
	 * // Single field ordering
	 * const orderBy = buildOrderByClause([
	 *   { field: 'createdAt', direction: 'desc' }
	 * ])
	 * // Result: [{ createdAt: 'desc' }]
	 *
	 * // Multiple field ordering
	 * const orderBy = buildOrderByClause([
	 *   { field: 'priority', direction: 'desc' },
	 *   { field: 'createdAt', direction: 'asc' }
	 * ])
	 * // Result: [{ priority: 'desc' }, { createdAt: 'asc' }]
	 * ```
	 */
	public buildOrderByClause(
		orderBy?: OrderByInput<TData>[],
	): Record<string, any>[] {
		this.validateOrderBy(orderBy)
		if (!orderBy?.length) return []

		return orderBy.map(({ field, direction }) => ({
			[field]: direction,
		}))
	}

	/**
	 * Checks if a condition is a search group.
	 *
	 * @example
	 * ```typescript
	 * const isGroup = isSearchGroup({
	 *   operator: 'OR',
	 *   fields: [
	 *     { field: 'role', operator: 'equals', value: 'ADMIN' },
	 *     { field: 'role', operator: 'equals', value: 'MANAGER' }
	 *   ]
	 * }) // true
	 *
	 * const isNotGroup = isSearchGroup({
	 *   field: 'name',
	 *   operator: 'contains',
	 *   value: 'John'
	 * }) // false
	 * ```
	 */
	private isSearchGroup(
		condition: SearchField<TData> | SearchGroup<TData>,
	): condition is SearchGroup<TData> {
		return 'fields' in condition
	}

	/**
	 * Processes a search condition into a  where clause.
	 *
	 * @example
	 * ```typescript
	 * // Simple field search
	 * const where = processSearchCondition({
	 *   field: 'name',
	 *   operator: 'contains',
	 *   value: 'John'
	 * })
	 * // Result: { name: { contains: 'John', mode: 'insensitive' } }
	 *
	 * // Nested field search
	 * const where = processSearchCondition({
	 *   field: ['user', 'profile', 'bio'],
	 *   operator: 'contains',
	 *   value: 'developer'
	 * })
	 * // Result: { user: { profile: { bio: { contains: 'developer', mode: 'insensitive' } } } }
	 * ```
	 */
	private processSearchCondition(
		condition: SearchField<TData> | SearchGroup<TData>,
	): WhereInput {
		if (this.isSearchGroup(condition)) {
			return {
				[condition.operator]: condition.fields.map(f =>
					this.processSearchCondition(f),
				),
			}
		}

		const { field, operator, value } = condition
		const fieldPath = Array.isArray(field) ? field.join('.') : String(field)
		const result: WhereInput = {}

		if (operator) {
			result[fieldPath] = {
				[operator]: value,
				...(operator === 'contains' ? { mode: 'insensitive' } : {}),
			}
		}

		return result
	}

	/**
	 * Processes a filter condition into a  where clause.
	 *
	 * @example
	 * ```typescript
	 * // Equality filter
	 * const where = processFilterCondition({
	 *   field: 'status',
	 *   operator: 'equals',
	 *   value: 'ACTIVE'
	 * })
	 * // Result: { status: { equals: 'ACTIVE' } }
	 *
	 * // Range filter
	 * const where = processFilterCondition({
	 *   field: 'age',
	 *   operator: 'gte',
	 *   value: 18
	 * })
	 * // Result: { age: { gte: 18 } }
	 *
	 * // Text search filter
	 * const where = processFilterCondition({
	 *   field: 'name',
	 *   operator: 'contains',
	 *   value: 'John'
	 * })
	 * // Result: { name: { contains: 'John', mode: 'insensitive' } }
	 * ```
	 */
	private processFilterCondition(field: FilterField<TData>): WhereInput {
		const { field: fieldPath, operator, value } = field
		const path = Array.isArray(fieldPath) ? fieldPath.join('.') : fieldPath

		if (!operator) {
			return { [path]: { equals: value } }
		}

		switch (operator) {
			case 'equals':
				return { [path]: { equals: value } }
			case 'not':
				return { [path]: { not: value } }
			case 'in':
				return { [path]: { in: value } }
			case 'notIn':
				return { [path]: { notIn: value } }
			case 'lt':
				return { [path]: { lt: value } }
			case 'lte':
				return { [path]: { lte: value } }
			case 'gt':
				return { [path]: { gt: value } }
			case 'gte':
				return { [path]: { gte: value } }
			case 'contains':
				return { [path]: { contains: value, mode: 'insensitive' } }
			case 'startsWith':
				return { [path]: { startsWith: value, mode: 'insensitive' } }
			case 'endsWith':
				return { [path]: { endsWith: value, mode: 'insensitive' } }
			default:
				return { [path]: { equals: value } }
		}
	}

	/**
	 * Finds multiple records based on the provided arguments.
	 *
	 * @example
	 * ```typescript
	 * // Basic find many
	 * const users = await searchService.findMany({
	 *   where: { status: 'ACTIVE' },
	 *   orderBy: [{ createdAt: 'desc' }],
	 *   take: 10
	 * })
	 *
	 * // With includes and select
	 * const users = await searchService.findMany({
	 *   where: { status: 'ACTIVE' },
	 *   include: { profile: true },
	 *   select: { id: true, name: true }
	 * })
	 * ```
	 */
	public async findMany(args: FindManyArgs<TData>): Promise<TData[]> {
		try {
			return await this.model.findMany(args)
		} catch (error) {
			throw new DatabaseError('Failed to find records', { args, error })
		}
	}

	/**
	 * Counts records based on the provided arguments.
	 *
	 * @example
	 * ```typescript
	 * // Basic count
	 * const count = await searchService.count({
	 *   where: { status: 'ACTIVE' }
	 * })
	 *
	 * // Count with complex conditions
	 * const count = await searchService.count({
	 *   where: {
	 *     AND: [
	 *       { status: 'ACTIVE' },
	 *       { age: { gte: 18 } }
	 *     ]
	 *   }
	 * })
	 * ```
	 */
	public async count(args: CountArgs): Promise<number> {
		try {
			return await this.model.count(args)
		} catch (error) {
			throw new DatabaseError('Failed to count records', { args, error })
		}
	}

	/**
	 * Performs aggregation operations on records.
	 *
	 * @example
	 * ```typescript
	 * // Basic aggregation
	 * const result = await searchService.aggregate({
	 *   where: { status: 'ACTIVE' },
	 *   _avg: { age: true },
	 *   _min: { createdAt: true },
	 *   _max: { updatedAt: true }
	 * })
	 *
	 * // Multiple aggregations
	 * const result = await searchService.aggregate({
	 *   where: { status: 'ACTIVE' },
	 *   _avg: { age: true, salary: true },
	 *   _sum: { points: true }
	 * })
	 * ```
	 */
	public async aggregate(args: AggregateArgs): Promise<any> {
		try {
			return await this.model.aggregate(args)
		} catch (error) {
			throw new DatabaseError('Failed to perform aggregation', { args, error })
		}
	}

	/**
	 * Groups records by specified fields.
	 *
	 * @example
	 * ```typescript
	 * // Basic group by
	 * const result = await searchService.groupBy({
	 *   by: ['role'],
	 *   where: { status: 'ACTIVE' },
	 *   _count: true
	 * })
	 *
	 * // Multiple group by fields
	 * const result = await searchService.groupBy({
	 *   by: ['role', 'department'],
	 *   where: { status: 'ACTIVE' },
	 *   _count: true,
	 *   _avg: { age: true }
	 * })
	 * ```
	 */
	public async groupBy(args: GroupByArgs): Promise<any> {
		try {
			return await this.model.groupBy(args)
		} catch (error) {
			throw new DatabaseError('Failed to perform group by operation', {
				args,
				error,
			})
		}
	}

	/**
	 * Creates a new record.
	 *
	 * @example
	 * ```typescript
	 * // Basic create
	 * const user = await searchService.create({
	 *   data: {
	 *     name: 'John Doe',
	 *     email: 'john@example.com',
	 *     status: 'ACTIVE'
	 *   }
	 * })
	 *
	 * // Create with nested relations
	 * const user = await searchService.create({
	 *   data: {
	 *     name: 'John Doe',
	 *     email: 'john@example.com',
	 *     profile: {
	 *       create: {
	 *         bio: 'Software Developer',
	 *         location: 'New York'
	 *       }
	 *     }
	 *   }
	 * })
	 * ```
	 */
	public async create(args: CreateArgs<TData>): Promise<TData> {
		try {
			return await this.model.create(args)
		} catch (error) {
			throw new DatabaseError('Failed to create record', { args, error })
		}
	}

	/**
	 * Updates an existing record.
	 *
	 * @example
	 * ```typescript
	 * // Basic update
	 * const user = await searchService.update({
	 *   where: { id: 'user-1' },
	 *   data: { status: 'INACTIVE' }
	 * })
	 *
	 * // Update with nested relations
	 * const user = await searchService.update({
	 *   where: { id: 'user-1' },
	 *   data: {
	 *     name: 'John Updated',
	 *     profile: {
	 *       update: {
	 *         bio: 'Updated Bio'
	 *       }
	 *     }
	 *   }
	 * })
	 * ```
	 */
	public async update(args: UpdateArgs<TData>): Promise<TData> {
		try {
			return await this.model.update(args)
		} catch (error) {
			throw new DatabaseError('Failed to update record', { args, error })
		}
	}

	/**
	 * Deletes a record.
	 *
	 * @example
	 * ```typescript
	 * // Basic delete
	 * const user = await searchService.delete({
	 *   where: { id: 'user-1' }
	 * })
	 *
	 * // Delete with complex conditions
	 * const user = await searchService.delete({
	 *   where: {
	 *     AND: [
	 *       { id: 'user-1' },
	 *       { status: 'INACTIVE' }
	 *     ]
	 *   }
	 * })
	 * ```
	 */
	public async delete(args: DeleteArgs): Promise<TData> {
		try {
			return await this.model.delete(args)
		} catch (error) {
			throw new DatabaseError('Failed to delete record', { args, error })
		}
	}

	/**
	 * Creates or updates a record based on the provided conditions.
	 *
	 * @example
	 * ```typescript
	 * // Basic upsert
	 * const user = await searchService.upsert({
	 *   where: { email: 'john@example.com' },
	 *   create: {
	 *     name: 'John Doe',
	 *     email: 'john@example.com',
	 *     status: 'ACTIVE'
	 *   },
	 *   update: {
	 *     status: 'INACTIVE'
	 *   }
	 * })
	 *
	 * // Upsert with nested relations
	 * const user = await searchService.upsert({
	 *   where: { email: 'john@example.com' },
	 *   create: {
	 *     name: 'John Doe',
	 *     email: 'john@example.com',
	 *     profile: {
	 *       create: {
	 *         bio: 'Software Developer'
	 *       }
	 *     }
	 *   },
	 *   update: {
	 *     name: 'John Updated',
	 *     profile: {
	 *       update: {
	 *         bio: 'Updated Bio'
	 *       }
	 *     }
	 *   }
	 * })
	 * ```
	 */
	public async upsert(args: UpsertArgs<TData>): Promise<TData> {
		try {
			return await this.model.upsert(args)
		} catch (error) {
			throw new DatabaseError('Failed to upsert record', { args, error })
		}
	}

	/**
	 * Performs a cursor-based pagination search.
	 *
	 * @example
	 * ```typescript
	 * // Basic cursor pagination
	 * const result = await searchService.findWithCursor(
	 *   { first: 10 },
	 *   {
	 *     searchFields: [{ field: 'name', operator: 'contains', value: 'John' }],
	 *     orderBy: [{ field: 'createdAt', direction: 'desc' }]
	 *   }
	 * )
	 * // Result: { edges: [{ node: User, cursor: 'id' }], pageInfo: { hasNextPage: true, endCursor: 'last-id' }, totalCount: 100 }
	 *
	 * // With filters and includes
	 * const result = await searchService.findWithCursor(
	 *   { first: 20, after: 'last-cursor-id' },
	 *   {
	 *     searchFields: [{ field: 'name', operator: 'contains', value: 'John' }],
	 *     filterFields: [{ field: 'status', operator: 'equals', value: 'ACTIVE' }],
	 *     orderBy: [{ field: 'createdAt', direction: 'desc' }],
	 *     include: { profile: true, posts: { select: { title: true } } }
	 *   }
	 * )
	 * ```
	 */
	public async findWithCursor(
		params: CursorPaginationParams,
		options: SearchOptions<TData> = {},
	): Promise<Connection<TData>> {
		const { first = 10, after } = params
		const { searchFields, filterFields, orderBy, select, include } = options

		const where = this.buildWhereClause(searchFields, filterFields)
		const orderByClause = this.buildOrderByClause(orderBy)

		const totalCount = await this.count({ where })

		const items = await this.findMany({
			where,
			orderBy: orderByClause,
			take: first,
			...(after && { cursor: { id: after }, skip: 1 }),
			select,
			include,
		})

		const hasNextPage = items.length === first
		const endCursor = items[items.length - 1]?.id

		return {
			edges: items.map(item => ({
				node: item,
				cursor: item.id,
			})),
			pageInfo: {
				hasNextPage,
				endCursor,
			},
			totalCount,
		}
	}

	/**
	 * Performs an offset-based pagination search.
	 *
	 * @example
	 * ```typescript
	 * // Basic offset pagination
	 * const result = await searchService.findWithOffset(
	 *   { page: 1, pageSize: 10 },
	 *   {
	 *     searchFields: [{ field: 'name', operator: 'contains', value: 'John' }],
	 *     orderBy: [{ field: 'createdAt', direction: 'desc' }]
	 *   }
	 * )
	 * // Result: { items: [User], totalCount: 100 }
	 *
	 * // With filters and field selection
	 * const result = await searchService.findWithOffset(
	 *   { page: 2, pageSize: 20 },
	 *   {
	 *     searchFields: [{ field: 'name', operator: 'contains', value: 'John' }],
	 *     filterFields: [{ field: 'status', operator: 'equals', value: 'ACTIVE' }],
	 *     orderBy: [{ field: 'createdAt', direction: 'desc' }],
	 *     select: { id: true, name: true, email: true }
	 *   }
	 * )
	 * ```
	 */
	public async findWithOffset(
		params: OffsetPaginationParams,
		options: SearchOptions<TData>,
	): Promise<{ items: TData[]; totalCount: number }> {
		const { page = 1, pageSize = 10 } = params
		const { searchFields, filterFields, orderBy, select, include } = options

		const where = this.buildWhereClause(searchFields, filterFields)
		const orderByClause = this.buildOrderByClause(orderBy)

		const totalCount = await this.count({ where })

		const items = await this.findMany({
			where,
			orderBy: orderByClause,
			take: pageSize,
			skip: (page - 1) * pageSize,
			select,
			include,
		})

		return { items, totalCount }
	}

	/**
	 * Performs a full-text search across specified fields.
	 *
	 * @example
	 * ```typescript
	 * // Basic full-text search
	 * const result = await searchService.fullTextSearch(
	 *   'John Doe',
	 *   {
	 *     searchFields: [
	 *       { field: 'name', operator: 'contains', value: 'John' },
	 *       { field: 'bio', operator: 'contains', value: 'developer' }
	 *     ]
	 *   }
	 * )
	 * // Result: { items: [User], totalCount: 50 }
	 *
	 * // With filters and includes
	 * const result = await searchService.fullTextSearch(
	 *   'John Doe',
	 *   {
	 *     searchFields: [
	 *       { field: 'name', operator: 'contains', value: 'John' },
	 *       { field: 'bio', operator: 'contains', value: 'developer' }
	 *     ],
	 *     filterFields: [{ field: 'status', operator: 'equals', value: 'ACTIVE' }],
	 *     include: { profile: true }
	 *   }
	 * )
	 * ```
	 */
	public async fullTextSearch(
		query: string,
		options: SearchOptions<TData>,
	): Promise<{ items: TData[]; totalCount: number }> {
		const {
			searchFields = [],
			filterFields,
			orderBy,
			select,
			include,
		} = options

		const where = this.buildWhereClause(searchFields, filterFields)
		const orderByClause = this.buildOrderByClause(orderBy)

		const totalCount = await this.count({ where })
		const items = await this.findMany({
			where,
			orderBy: orderByClause,
			select,
			include,
		})

		return { items, totalCount }
	}

	/**
	 * Performs aggregations on the search results.
	 *
	 * @example
	 * ```typescript
	 * // Basic aggregations
	 * const result = await searchService.performAggregations({
	 *   searchFields: [{ field: 'status', operator: 'equals', value: 'ACTIVE' }],
	 *   aggregations: {
	 *     count: true,
	 *     avg: ['age'],
	 *     min: ['createdAt'],
	 *     max: ['updatedAt']
	 *   }
	 * })
	 * // Result: { count: 100, avg: { age: 30 }, min: { createdAt: Date }, max: { updatedAt: Date } }
	 *
	 * // With group by
	 * const result = await searchService.performAggregations({
	 *   searchFields: [{ field: 'status', operator: 'equals', value: 'ACTIVE' }],
	 *   aggregations: {
	 *     count: true,
	 *     groupBy: ['role', 'department']
	 *   }
	 * })
	 * // Result: { count: 100, groupBy: [{ role: 'ADMIN', department: 'IT', _count: 5 }, ...] }
	 * ```
	 */
	public async performAggregations(
		options: SearchOptions<TData> & {
			aggregations: {
				count?: boolean
				avg?: string[]
				min?: string[]
				max?: string[]
				groupBy?: string[]
			}
		},
	): Promise<Record<string, any>> {
		const { searchFields, filterFields, aggregations } = options

		const where = this.buildWhereClause(searchFields, filterFields)

		const result: Record<string, any> = {}

		if (aggregations.count) {
			result.count = await this.count({ where })
		}

		if (aggregations.avg?.length) {
			result.avg = await this.aggregate({
				where,
				_avg: aggregations.avg.reduce(
					(acc, field) => ({ ...acc, [field]: true }),
					{},
				),
			})
		}

		if (aggregations.min?.length) {
			result.min = await this.aggregate({
				where,
				_min: aggregations.min.reduce(
					(acc, field) => ({ ...acc, [field]: true }),
					{},
				),
			})
		}

		if (aggregations.max?.length) {
			result.max = await this.aggregate({
				where,
				_max: aggregations.max.reduce(
					(acc, field) => ({ ...acc, [field]: true }),
					{},
				),
			})
		}

		if (aggregations.groupBy?.length) {
			result.groupBy = await this.groupBy({
				by: aggregations.groupBy,
				where,
				_count: true,
			})
		}

		return result
	}

	/**
	 * Performs bulk operations on multiple records.
	 *
	 * @example
	 * ```typescript
	 * // Bulk create and update
	 * const results = await searchService.bulkOperation([
	 *   {
	 *     type: 'create',
	 *     data: { name: 'John', email: 'john@example.com' }
	 *   },
	 *   {
	 *     type: 'update',
	 *     where: { id: 'user-1' },
	 *     data: { status: 'ACTIVE' }
	 *   }
	 * ])
	 *
	 * // Bulk upsert
	 * const results = await searchService.bulkOperation([
	 *   {
	 *     type: 'upsert',
	 *     where: { email: 'john@example.com' },
	 *     create: { name: 'John', email: 'john@example.com' },
	 *     update: { status: 'ACTIVE' }
	 *   }
	 * ])
	 *
	 * // Mixed operations
	 * const results = await searchService.bulkOperation([
	 *   {
	 *     type: 'create',
	 *     data: { name: 'John', email: 'john@example.com' }
	 *   },
	 *   {
	 *     type: 'update',
	 *     where: { id: 'user-1' },
	 *     data: { status: 'ACTIVE' }
	 *   },
	 *   {
	 *     type: 'delete',
	 *     where: { id: 'user-2' }
	 *   },
	 *   {
	 *     type: 'upsert',
	 *     where: { email: 'jane@example.com' },
	 *     create: { name: 'Jane', email: 'jane@example.com' },
	 *     update: { status: 'ACTIVE' }
	 *   }
	 * ])
	 * ```
	 */
	public async bulkOperation(
		operations: Array<{
			type: 'create' | 'update' | 'delete' | 'upsert'
			data?: Partial<TData>
			where?: WhereInput
			create?: Partial<TData>
			update?: Partial<TData>
		}>,
	): Promise<TData[]> {
		const results: TData[] = []

		for (const operation of operations) {
			switch (operation.type) {
				case 'create':
					if (!operation.data)
						throw new Error('Data is required for create operation')
					results.push(await this.create({ data: operation.data }))
					break
				case 'update':
					if (!operation.where || !operation.data)
						throw new Error('Where and data are required for update operation')
					results.push(
						await this.update({ where: operation.where, data: operation.data }),
					)
					break
				case 'delete':
					if (!operation.where)
						throw new Error('Where is required for delete operation')
					results.push(await this.delete({ where: operation.where }))
					break
				case 'upsert':
					if (!operation.where || !operation.create || !operation.update)
						throw new Error(
							'Where, create, and update are required for upsert operation',
						)
					results.push(
						await this.upsert({
							where: operation.where,
							create: operation.create,
							update: operation.update,
						}),
					)
					break
			}
		}

		return results
	}
}

/**
 * Factory function to create a search instance.
 *
 * @example
 * ```typescript
 * // Basic usage
 * const userSearchService = createSearch(.user)
 *
 * // Using the search implementation
 * const results = await userSearchService.findWithCursor(
 *   { first: 10 },
 *   {
 *     searchFields: [{ field: 'name', operator: 'contains', value: 'John' }],
 *     orderBy: [{ field: 'createdAt', direction: 'desc' }]
 *   }
 * )
 *
 * // With different model
 * const postSearchService = createSearch(.post)
 * const posts = await postSearchService.findWithOffset(
 *   { page: 1, pageSize: 20 },
 *   {
 *     searchFields: [{ field: 'title', operator: 'contains', value: 'TypeScript' }],
 *     filterFields: [{ field: 'published', operator: 'equals', value: true }]
 *   }
 * )
 * ```
 */
export function createSearch<TData extends BaseModel>(
	model: Model<TData>,
): SearchService<TData> {
	return new SearchService<TData>(model)
}
