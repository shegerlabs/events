import { prisma } from '@repo/database'
import { add } from '@repo/utils/add'
import { subtract } from '@repo/utils/subtract'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	]
}

export async function loader({ context }: Route.LoaderArgs) {
	const users = await prisma.user.findMany()
	return { message: context.VALUE_FROM_EXPRESS, users }
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const users = loaderData.users
	return (
		<>
			{/* <Welcome message={loaderData.message} /> */}
			<div>{add(1, 2)}</div>
			<div>{subtract(1, 2)}</div>
			<div>{JSON.stringify(users)}</div>
		</>
	)
}
