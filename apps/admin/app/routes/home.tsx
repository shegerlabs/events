import { add } from '@repo/utils/add'
import { subtract } from '@repo/utils/subtract'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	]
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.VALUE_FROM_EXPRESS }
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			{/* <Welcome message={loaderData.message} /> */}
			<div>{add(1, 2)}</div>
			<div>{subtract(1, 2)}</div>
		</>
	)
}
