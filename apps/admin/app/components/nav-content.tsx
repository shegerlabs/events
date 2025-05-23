import { NavLink } from 'react-router'
import type { SettingsNavItem } from '~/lib/types'
import { cn } from '~/lib/utils'

export function NavContent({ navItems }: { navItems: Array<SettingsNavItem> }) {
	return (
		<nav className="flex flex-col gap-2">
			{navItems.map(item => (
				<NavLink
					key={item.to}
					to={item.to}
					className={({ isActive }) =>
						cn(
							'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
							isActive
								? 'bg-muted text-foreground'
								: 'text-muted-foreground hover:bg-muted hover:text-foreground',
						)
					}
					end={item.to === '/settings'}
				>
					<item.icon className="h-5 w-5" />
					{item.title}
				</NavLink>
			))}
		</nav>
	)
}
