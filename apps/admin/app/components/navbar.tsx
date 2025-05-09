import { Bell, User } from 'lucide-react'
import { Link } from 'react-router'

import { Button } from '~/components/ui/button'
import type { Theme } from '~/lib/theme.server'
import { ThemeSwitch } from '~/routes/resources+/theme-switch'

export default function Navbar({ theme }: { theme: Theme | null }) {
	return (
		<header className="border-border bg-background sticky top-0 z-50 w-full border-b">
			<div className="flex h-12 w-full items-center justify-between px-4">
				<div className="flex items-center">
					<Link to="/" className="mr-8 flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5z" />
							<path d="M2 17l10 5 10-5" />
							<path d="M2 12l10 5 10-5" />
						</svg>
					</Link>

					<nav className="flex items-center space-x-6">
						<Link
							to="/settings"
							className="hover:text-primary text-sm font-medium transition-colors"
						>
							Settings
						</Link>
					</nav>
				</div>

				<div className="flex items-center space-x-2">
					<ThemeSwitch userPreference={theme} />

					<Button variant="ghost" size="icon" aria-label="Notifications">
						<Bell className="h-5 w-5" />
					</Button>

					<Button variant="ghost" size="icon" aria-label="Profile">
						<User className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</header>
	)
}
