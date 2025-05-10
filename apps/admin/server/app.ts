import { createRequestHandler } from '@react-router/express'
import express from 'express'
import 'react-router'

declare module 'react-router' {
	interface AppLoadContext {
		VALUE_FROM_EXPRESS: string
	}
}

export const app = express()

// Handle Chrome DevTools requests
app.use('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
	res.status(404).json({ error: 'Not found' })
})

app.use(
	createRequestHandler({
		build: () => import('virtual:react-router/server-build'),
		getLoadContext() {
			return {
				VALUE_FROM_EXPRESS: 'Hello from Express',
			}
		},
	}),
)
