import { AlertCircle, FileQuestion, Lock, Server } from 'lucide-react'
import { ErrorCard, GeneralErrorBoundary } from './error-boundary'

// Example error boundaries for different routes

// For a products route
export function ProductsErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ error }) => (
					<ErrorCard
						title="Product Not Found"
						description="Sorry, we couldn't find the product you're looking for."
						details={error?.data?.message}
						icon={<FileQuestion size={80} className="text-amber-500" />}
					/>
				),
				403: ({ error }) => (
					<ErrorCard
						title="Products Access Denied"
						description="You don't have permission to access the products section."
						details={error?.data?.message}
						icon={<Lock size={80} className="text-red-500" />}
					/>
				),
			}}
		/>
	)
}

// For a users route
export function UsersErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ error }) => (
					<ErrorCard
						title="User Not Found"
						description="Sorry, we couldn't find the user you're looking for."
						details={error?.data?.message}
						icon={<FileQuestion size={80} className="text-amber-500" />}
					/>
				),
				500: ({ error }) => (
					<ErrorCard
						title="User Service Error"
						description="We're having trouble connecting to the user service."
						details={error?.data?.message}
						icon={<Server size={80} className="text-red-500" />}
					/>
				),
			}}
		/>
	)
}

// For an analytics route
export function AnalyticsErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: ({ error }) => (
					<ErrorCard
						title="Analytics Access Restricted"
						description="You need additional permissions to view analytics data."
						details={error?.data?.message}
						icon={<AlertCircle size={80} className="text-orange-500" />}
					/>
				),
				500: ({ error }) => (
					<ErrorCard
						title="Analytics Processing Error"
						description="We encountered an error processing the analytics data."
						details={error?.data?.message}
						icon={<Server size={80} className="text-red-500" />}
					/>
				),
			}}
		/>
	)
}

// Default error boundary with fallback to default styles
export function DefaultErrorBoundary() {
	// This will use the default error handlers from GeneralErrorBoundary
	return <GeneralErrorBoundary />
}
