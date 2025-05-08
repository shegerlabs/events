import type { Route } from './+types/settings'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Admin | Settings' },
		{ name: 'description', content: 'Admin | Settings' },
	]
}

export default function Settings() {
	return <div></div>
}
