import { Bell, LogIn } from 'lucide-react'
import { Link } from 'react-router'

import { Button } from '~/components/ui/button'
import type { Theme } from '~/lib/theme.server'
import { userHasRoles } from '~/lib/user'
import { ThemeSwitch } from '~/routes/resources+/theme-switch'
import { UserDropdown } from './user-dropdown'

type User = {
	id: string
	username: string
	firstName: string
	lastName: string
	tenantId: string | null
	roles: {
		name: string
		permissions: {
			action: string
			entity: string
			access: string
		}[]
	}[]
	sessions: any[]
}

export default function Navbar({
	theme,
	user,
}: {
	theme: Theme | null
	user: User | null | undefined
}) {
	const isAdmin = user ? userHasRoles(user, ['admin']) : false

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

					{isAdmin && (
						<nav className="flex items-center space-x-6">
							<Link
								to="/settings"
								className="hover:text-primary text-sm font-medium transition-colors"
							>
								Settings
							</Link>
						</nav>
					)}
				</div>

				<div className="flex items-center space-x-2">
					<ThemeSwitch userPreference={theme} />

					<Button variant="ghost" size="icon" aria-label="Notifications">
						<Bell className="h-5 w-5" />
					</Button>

					{user ? (
						<UserDropdown />
					) : (
						<Link
							to="/login"
							className="hover:text-primary text-sm font-medium transition-colors"
						>
							<LogIn className="h-4 w-4" />
						</Link>
					)}
				</div>
			</div>
		</header>
	)
}
