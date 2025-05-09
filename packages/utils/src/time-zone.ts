import { type ClientHint } from './types'

export const timeZoneClientHint = {
	cookieName: 'CH-time-zone',
	getValueCode: 'Intl.DateTimeFormat().resolvedOptions().timeZone',
	fallback: 'UTC',
} as const satisfies ClientHint<string>
