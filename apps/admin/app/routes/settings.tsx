import {
	AlertCircle,
	Bell,
	Code,
	CreditCard,
	Lock,
	Settings,
	Shield,
	User,
} from 'lucide-react'
import { data, NavLink, Outlet, useLocation, useNavigation } from 'react-router'
import { ErrorCard, GeneralErrorBoundary } from '~/components/error-boundary'
import { Button } from '~/components/ui/button'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { requireUserWithRoles } from '~/lib/permission.server'
import { cn } from '~/lib/utils'
import type { Route } from './+types/settings'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Admin | Settings' },
		{ name: 'description', content: 'Admin | Settings' },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
	await requireUserWithRoles(request, ['admin'])
	return data({})
}

const SettingsRoute = () => {
	const location = useLocation()
	const navigation = useNavigation()
	const isLoading = navigation.state === 'loading'

	const navItems = [
		{
			title: 'General',
			to: '/settings/general',
			icon: Settings,
		},
		{
			title: 'Profile',
			to: '/settings/profile',
			icon: User,
		},
		{
			title: 'Billing',
			to: '/settings/billing',
			icon: CreditCard,
		},
		{
			title: 'Notifications',
			to: '/settings/notifications',
			icon: Bell,
		},
		{
			title: 'Security',
			to: '/settings/security',
			icon: Lock,
		},
		{
			title: 'Privacy',
			to: '/settings/privacy',
			icon: Shield,
		},
		{
			title: 'Appearance',
			to: '/settings/appearance',
			icon: Code,
		},
	]

	const currentNavItem = navItems.find(
		item =>
			location.pathname === item.to ||
			(item.to === '/settings' && location.pathname === '/settings/'),
	)

	const NavContent = () => (
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

	return (
		<div className="relative h-full flex-col space-y-4 p-4 md:flex">
			<div className="flex items-center justify-between space-y-2">
				<div>
					<h2 className="text-lg tracking-tight">Settings</h2>
					<p className="text-muted-foreground">
						Manage your account settings and preferences.
					</p>
				</div>
				<div className="flex items-center space-x-2">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" className="md:hidden">
								<Settings className="mr-2 h-4 w-4" />
								Menu
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-[300px] sm:w-[400px]">
							<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
								<NavContent />
							</ScrollArea>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<Separator />
			<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
				<aside className="hidden md:col-span-2 md:block">
					<ScrollArea className="h-[calc(100vh-16rem)]">
						<NavContent />
					</ScrollArea>
				</aside>
				<main className="md:col-span-10">
					<div
						className={cn(
							'relative',
							isLoading && 'pointer-events-none opacity-50',
						)}
					>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: ({ error }) => (
					<ErrorCard
						title="Access Denied"
						description="You don't have permission to access the settings page."
						details={error?.data?.message}
						icon={<AlertCircle size={80} className="text-orange-500" />}
					/>
				),
			}}
		/>
	)
}

export default SettingsRoute
