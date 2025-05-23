import {
	Bell,
	Code,
	CreditCard,
	List,
	Lock,
	Settings,
	Shield,
	User,
} from 'lucide-react'
import type { SettingsNavItem, VerificationTypes } from './types'

export const sessionKey = 'sessionId'
export const onboardingEmailSessionKey = 'onboardingEmail'
export const resetPasswordEmailSessionKey = 'resetPasswordEmail'
export const newEmailAddressSessionKey = 'newEmailAddress'
export const twoFAVerifyVerificationType = '2fa-verify'
export const twoFAVerificationType = '2fa' satisfies VerificationTypes

export const codeQueryParam = 'code'
export const targetQueryParam = 'target'
export const typeQueryParam = 'type'
export const redirectToQueryParam = 'redirectTo'

export const unverifiedSessionIdKey = 'unverified-session-id'
export const rememberMeSessionKey = 'remember-me'
export const verifiedTimeKey = 'verified-time'

export const AUTH_SETTINGS = {
	MAX_LOGIN_ATTEMPTS: 5,
	LOCKOUT_DURATION: 30, // minutes
	AUTO_RESET_AFTER: 60, // minutes - reset failed attempts after this duration
	MAX_LOCK_COUNT: 3, // maximum number of times an account can be locked before requiring manual intervention
}

export const settingsNavItems: Array<SettingsNavItem> = [
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
	{
		title: 'Entity Types',
		to: '/settings/entity-types',
		icon: List,
	},
]
