import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '~/components/ui/button'
import './app.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className="flex min-h-svh flex-col items-center justify-center">
			<Button>Click me</Button>
		</div>
	</StrictMode>,
)
