'use client'

import { AlertCircle, Bug, FileQuestion, Frown, Server } from 'lucide-react'
import type { ReactElement } from 'react'
import {
	isRouteErrorResponse,
	useParams,
	useRouteError,
	type ErrorResponse,
} from 'react-router'
import { Button } from '~/components/ui/button'
import { getErrorMessage } from '~/lib/utils'

type StatusHandler = (info: {
	error: ErrorResponse
	params: Record<string, string | undefined>
}) => ReactElement | null

const DefaultErrorComponents: Record<number, StatusHandler> = {
	404: ({ error }) => (
		<ErrorCard
			status={error.status}
			title="Page Not Found"
			description="Sorry, we couldn't find the page you're looking for."
			icon={<FileQuestion size={80} className="text-amber-500" />}
		/>
	),
	500: ({ error }) => (
		<ErrorCard
			status={error.status}
			title="Server Error"
			description="Sorry, something went wrong on our server."
			icon={<Server size={80} className="text-red-500" />}
		/>
	),
	401: ({ error }) => (
		<ErrorCard
			status={error.status}
			title="Unauthorized"
			description="You don't have permission to access this resource."
			icon={<AlertCircle size={80} className="text-orange-500" />}
		/>
	),
	403: ({ error }) => (
		<ErrorCard
			status={error.status}
			title="Forbidden"
			description="You don't have permission to access this resource."
			icon={<AlertCircle size={80} className="text-orange-500" />}
		/>
	),
}

export const ErrorCard = ({
	status,
	title,
	description,
	details,
	icon,
}: {
	status?: number
	title: string
	description: string
	details?: string
	icon?: ReactElement
}) => {
	const displayTitle = status ? `${status} | ${title}` : title

	return (
		<div className="text-center">
			<div className="mb-4 flex justify-center">
				{icon || <Frown size={80} className="text-gray-400" />}
			</div>
			<h2 className="text-xl font-bold">{displayTitle}</h2>
			<p className="mt-2">{description}</p>
			{details && <p className="mt-1 text-sm text-gray-500">{details}</p>}
			<div className="mt-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => window.history.back()}
					className="mx-2"
				>
					Go Back
				</Button>
				<Button
					variant="default"
					size="sm"
					onClick={() => (window.location.href = '/')}
					className="mx-2"
				>
					Home
				</Button>
			</div>
		</div>
	)
}

export function GeneralErrorBoundary({
	defaultStatusHandler = ({ error }) => (
		<ErrorCard
			status={error.status}
			title="Error"
			description={error.data || 'An error occurred'}
			details={
				typeof error.data === 'string'
					? error.data
					: JSON.stringify(error.data, null, 2)
			}
		/>
	),
	statusHandlers,
	unexpectedErrorHandler = error => {
		const errorMessage = getErrorMessage(error)
		return (
			<ErrorCard
				title="Unexpected Error"
				description="We've encountered an unexpected error."
				details={errorMessage}
				icon={<Bug size={80} className="text-purple-500" />}
			/>
		)
	},
}: {
	defaultStatusHandler?: StatusHandler
	statusHandlers?: Record<number, StatusHandler>
	unexpectedErrorHandler?: (error: unknown) => ReactElement | null
}) {
	const error = useRouteError()
	const params = useParams()
	const isResponse = isRouteErrorResponse(error)

	if (typeof document !== 'undefined') {
		console.error('Error caught by error boundary:', error)
	}

	// Combine default handlers with custom handlers
	const combinedStatusHandlers = {
		...DefaultErrorComponents,
		...statusHandlers,
	}

	return (
		<div className="flex min-h-[50vh] w-full items-center justify-center p-4 md:p-8">
			{isResponse
				? (combinedStatusHandlers[error.status] ?? defaultStatusHandler)({
						error,
						params,
					})
				: unexpectedErrorHandler(error)}
		</div>
	)
}
