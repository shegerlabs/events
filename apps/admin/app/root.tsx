import {
	isRouteErrorResponse,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'

import {
	Bell,
	Calendar,
	LogOut,
	Menu,
	Moon,
	Settings,
	Sun,
	User,
	X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Route } from './+types/root'
import './app.css'

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', to: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		to: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		to: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	const [isProfileOpen, setIsProfileOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)

	const dropdownRef = useRef<HTMLDivElement>(null)
	const mobileMenuRef = useRef<HTMLDivElement>(null)

	// Initialize theme from localStorage or system preference
	useEffect(() => {
		// Check if theme is stored in localStorage
		const storedTheme = localStorage.getItem('theme')

		if (storedTheme === 'dark') {
			setIsDarkMode(true)
			document.documentElement.classList.add('dark')
		} else if (storedTheme === 'light') {
			setIsDarkMode(false)
			document.documentElement.classList.remove('dark')
		} else {
			// If no stored preference, check system preference
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches
			setIsDarkMode(prefersDark)
			if (prefersDark) {
				document.documentElement.classList.add('dark')
			}
		}
	}, [])

	// Handle click outside to close dropdown
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsProfileOpen(false)
			}
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node) &&
				!(event.target as Element).closest(
					'button[aria-label="Toggle mobile menu"]',
				)
			) {
				setIsMobileMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	// Toggle theme function
	const toggleTheme = () => {
		const newDarkMode = !isDarkMode
		setIsDarkMode(newDarkMode)

		// Update localStorage
		localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')

		// Update HTML class
		if (newDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			<header className="relative z-10 bg-[#4b6c4a] text-white">
				<div className="flex h-10 items-center justify-between px-4 md:px-6">
					<div className="flex items-center gap-8">
						<Link to="#" className="flex items-center">
							<div className="flex h-7 w-7 items-center justify-center">
								<Calendar className="h-6 w-6 text-white" />
							</div>
						</Link>
						<nav className="hidden gap-6 md:flex">
							<Link
								to="#"
								className="flex h-10 items-center rounded-sm bg-[#3d583c] px-3 text-sm font-medium text-white"
							>
								Dashboard
							</Link>
							<Link
								to="#"
								className="flex h-10 items-center px-3 text-sm font-medium text-white/80 hover:text-white"
							>
								Team
							</Link>
							<Link
								to="#"
								className="flex h-10 items-center px-3 text-sm font-medium text-white/80 hover:text-white"
							>
								Projects
							</Link>
							<Link
								to="#"
								className="flex h-10 items-center px-3 text-sm font-medium text-white/80 hover:text-white"
							>
								Calendar
							</Link>
						</nav>
					</div>
					<div className="flex items-center gap-4">
						{/* Theme Toggle Button */}
						<button
							type="button"
							onClick={toggleTheme}
							className="relative rounded-full p-1.5 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/30 focus:outline-none"
							aria-label={
								isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
							}
						>
							{isDarkMode ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</button>

						<button
							type="button"
							className="relative rounded-full p-1.5 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/30 focus:outline-none"
						>
							<span className="sr-only">View notifications</span>
							<Bell className="h-5 w-5" />
						</button>
						<div className="relative" ref={dropdownRef}>
							<button
								type="button"
								className="relative rounded-full p-1.5 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/30 focus:outline-none"
								onClick={() => setIsProfileOpen(!isProfileOpen)}
								aria-expanded={isProfileOpen}
							>
								<span className="sr-only">Open user menu</span>
								<User className="h-5 w-5" />
							</button>

							{/* Profile dropdown */}
							{isProfileOpen && (
								<div className="ring-opacity-5 absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none dark:bg-gray-800">
									<div className="border-b px-4 py-3 dark:border-gray-700">
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Signed in as
										</p>
										<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
											event.organizer@example.com
										</p>
									</div>
									<Link
										to="#"
										className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
									>
										<Settings className="mr-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
										Settings
									</Link>
									<Link
										to="#"
										className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
									>
										<LogOut className="mr-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
										Sign out
									</Link>
								</div>
							)}
						</div>
						<button
							type="button"
							className="rounded-md p-1.5 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/30 focus:outline-none md:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle mobile menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{isMobileMenuOpen && (
					<div
						className="absolute inset-x-0 top-10 z-10 bg-[#4b6c4a] shadow-lg md:hidden"
						ref={mobileMenuRef}
					>
						<div className="space-y-1 px-4 py-3">
							<Link
								to="#"
								className="block rounded-md bg-[#3d583c] px-3 py-2 text-base font-medium text-white"
							>
								Dashboard
							</Link>
							<Link
								to="#"
								className="block rounded-md px-3 py-2 text-base font-medium text-white/80 hover:bg-[#3d583c] hover:text-white"
							>
								Team
							</Link>
							<Link
								to="#"
								className="block rounded-md px-3 py-2 text-base font-medium text-white/80 hover:bg-[#3d583c] hover:text-white"
							>
								Projects
							</Link>
							<Link
								to="#"
								className="block rounded-md px-3 py-2 text-base font-medium text-white/80 hover:bg-[#3d583c] hover:text-white"
							>
								Calendar
							</Link>

							{/* Mobile Theme Toggle */}
							<div className="mt-3 px-3 py-2">
								<div className="flex items-center justify-between">
									<span className="text-base font-medium text-white/80">
										Dark Mode
									</span>
									<button
										onClick={toggleTheme}
										className="relative rounded-full p-1 text-white/80 hover:text-white focus:outline-none"
										aria-label={
											isDarkMode
												? 'Switch to light mode'
												: 'Switch to dark mode'
										}
									>
										{isDarkMode ? (
											<Sun className="h-5 w-5" />
										) : (
											<Moon className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</header>
			<main className="min-h-[calc(100vh-40px)] bg-gray-50 dark:bg-gray-900">
				<Outlet />
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
