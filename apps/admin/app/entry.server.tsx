import { PassThrough } from 'node:stream'

import { contentSecurity } from '@nichtsam/helmet/content'
import { createReadableStreamFromReadable } from '@react-router/node'
import { isbot } from 'isbot'
import crypto from 'node:crypto'
import type { RenderToPipeableStreamOptions } from 'react-dom/server'
import { renderToPipeableStream } from 'react-dom/server'
import type { AppLoadContext, EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'
import { getEnv, init } from './lib/env.server'
import { NonceProvider } from './lib/nonce-provider'
import { makeTimings } from './lib/timing.server'

export const streamTimeout = 5_000

init()
global.ENV = getEnv()
const MODE = process.env.NODE_ENV ?? 'development'

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext,
	loadContext: AppLoadContext,
	// If you have middleware enabled:
	// loadContext: unstable_RouterContextProvider
) {
	const nonce = crypto.randomBytes(16).toString('hex')

	return new Promise((resolve, reject) => {
		let shellRendered = false
		let userAgent = request.headers.get('user-agent')

		// Ensure requests from bots and SPA Mode renders wait for all content to load before responding
		// https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
		let readyOption: keyof RenderToPipeableStreamOptions =
			(userAgent && isbot(userAgent)) || routerContext.isSpaMode
				? 'onAllReady'
				: 'onShellReady'

		// NOTE: this timing will only include things that are rendered in the shell
		// and will not include suspended components and deferred loaders
		const timings = makeTimings('render', 'renderToPipeableStream')

		const { pipe, abort } = renderToPipeableStream(
			<NonceProvider value={nonce}>
				<ServerRouter context={routerContext} url={request.url} nonce={nonce} />
			</NonceProvider>,
			{
				[readyOption]() {
					shellRendered = true
					const body = new PassThrough()
					const stream = createReadableStreamFromReadable(body)

					responseHeaders.set('Content-Type', 'text/html')
					responseHeaders.append('Server-Timing', timings.toString())

					contentSecurity(responseHeaders, {
						crossOriginEmbedderPolicy: false,
						contentSecurityPolicy: {
							// NOTE: Remove reportOnly when you're ready to enforce this CSP
							reportOnly: true,
							directives: {
								fetch: {
									'connect-src': [
										MODE === 'development' ? 'ws:' : undefined,
										"'self'",
									],
									'font-src': ["'self'"],
									'frame-src': ["'self'"],
									'img-src': ["'self'", 'data:'],
									'script-src': [
										"'strict-dynamic'",
										"'self'",
										`'nonce-${nonce}'`,
									],
									'script-src-attr': [`'nonce-${nonce}'`],
								},
							},
						},
					})

					resolve(
						new Response(stream, {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					)

					pipe(body)
				},
				onShellError(error: unknown) {
					reject(error)
				},
				onError(error: unknown) {
					responseStatusCode = 500
					// Log streaming rendering errors from inside the shell.  Don't log
					// errors encountered during initial shell rendering since they'll
					// reject and get logged in handleDocumentRequest.
					if (shellRendered) {
						console.error(error)
					}
				},
				nonce,
			},
		)

		// Abort the rendering stream after the `streamTimeout` so it has time to
		// flush down the rejected boundaries
		setTimeout(abort, streamTimeout + 1000)
	})
}
