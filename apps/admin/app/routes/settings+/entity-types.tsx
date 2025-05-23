import { AlertCircle } from 'lucide-react'
import { data, Outlet } from 'react-router'
import { ErrorCard, GeneralErrorBoundary } from '~/components/error-boundary'
import { requireUserWithRoles } from '~/lib/permission.server'
import type { Route } from './+types/entity-types'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Entity Types' },
		{ name: 'description', content: 'Entity Types' },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
	await requireUserWithRoles(request, ['admin'])
	return data({})
}

export default function EntityTypesSettings() {
	return (
		<div className="p-4">
			<Outlet />
		</div>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: ({ error }) => (
					<ErrorCard
						title="Access Denied"
						description="You don't have permission to access the entity types settings page."
						details={error?.data?.message}
						icon={<AlertCircle size={80} className="text-orange-500" />}
					/>
				),
			}}
		/>
	)
}
