import { useRouteLoaderData } from 'react-router'
import { type loader as rootLoader } from '~/root.tsx'

function isUser(
	user: any,
): user is Awaited<ReturnType<typeof rootLoader>>['data']['user'] {
	return user && typeof user === 'object' && typeof user.id === 'string'
}

export function useOptionalUser() {
	const data = useRouteLoaderData<typeof rootLoader>('root')
	if (!data || !isUser(data.user)) {
		return undefined
	}
	return data.user
}

export function useUser() {
	const maybeUser = useOptionalUser()
	if (!maybeUser) {
		throw new Error(
			'No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.',
		)
	}

	return maybeUser
}
