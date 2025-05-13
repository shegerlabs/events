import { redirect } from 'react-router'
import { logout } from '~/lib/auth.server'
import type { Route } from '../+types'

export async function loader() {
	return redirect('/')
}

export async function action({ request }: Route.ActionArgs) {
	return logout({ request })
}
