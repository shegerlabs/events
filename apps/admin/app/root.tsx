import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteLoaderData,
} from 'react-router'

import type { Route } from './+types/root'
import './app.css'
import Navbar from './components/navbar'
import { ProgressBar } from './components/progress-bar'
import { useToast } from './components/toaster'
import { Toaster } from './components/ui/sonner'
import { ClientHintCheck, getHints } from './lib/client-hints'
import { getEnv } from './lib/env.server'
import { pipeHeaders } from './lib/headers.server'
import { useNonce } from './lib/nonce-provider'
import { getTheme } from './lib/theme.server'
import { makeTimings } from './lib/timing.server'
import { getToast } from './lib/toast.server'
import { combineHeaders, getDomainUrl } from './lib/utils'
import { useOptionalTheme, useTheme } from './routes/resources+/theme-switch'

export const meta: Route.MetaFunction = ({ data }) => {
	return [
		{ title: data ? 'Admin' : 'Error | Admin' },
		{ name: 'description', content: `Admin` },
	]
}

export const headers: Route.HeadersFunction = pipeHeaders

export async function loader({ request }: Route.LoaderArgs) {
	const timings = makeTimings('root loader')
	const { toast, headers: toastHeaders } = await getToast(request)

	return data(
		{
			requestInfo: {
				hints: getHints(request),
				origin: getDomainUrl(request),
				path: new URL(request.url).pathname,
				userPrefs: {
					theme: getTheme(request),
				},
			},
			ENV: getEnv(),
			toast,
		},
		{
			headers: combineHeaders(
				{ 'Server-Timing': timings.toString() },
				toastHeaders,
			),
		},
	)
}

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useRouteLoaderData('root')
	const nonce = useNonce()
	const theme = useOptionalTheme()
	const allowIndexing = data?.ENV.ALLOW_INDEXING !== 'false'

	return (
		<html lang="en" className={`${theme} h-full overflow-hidden`}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{allowIndexing ? null : (
					<meta name="robots" content="noindex, nofollow" />
				)}
				<ClientHintCheck nonce={nonce} />
				<Meta />
				<Links />
			</head>
			<body className="bg-background text-foreground">
				{children}
				<script
					nonce={nonce}
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify(data?.ENV)}`,
					}}
				/>
				<ScrollRestoration nonce={nonce} />
				<Scripts nonce={nonce} />
			</body>
		</html>
	)
}

export default function App() {
	const data = useLoaderData<typeof loader>()
	const theme = useTheme()
	useToast(data.toast)

	return (
		<div className="flex min-h-screen flex-col">
			<Navbar theme={data.requestInfo.userPrefs.theme} />
			<main className="flex-1">
				<Outlet />
				<Toaster closeButton position="top-center" theme={theme} />
				<ProgressBar />
			</main>
		</div>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!'
	let details = 'An unexpected error occurred.'
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className="container mx-auto p-4 pt-16">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full overflow-x-auto p-4">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}
