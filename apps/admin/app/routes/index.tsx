import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Admin | Home' },
		{ name: 'description', content: 'Admin | Home' },
	]
}

export async function loader({ context }: Route.LoaderArgs) {
	return { message: context.VALUE_FROM_EXPRESS }
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <></>
}
