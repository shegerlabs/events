import { prisma } from '@repo/database'
import { createCookieSessionStorage } from 'react-router'
import {
	redirectToQueryParam,
	targetQueryParam,
	twoFAVerificationType,
	typeQueryParam,
	unverifiedSessionIdKey,
	verifiedTimeKey,
} from './constants'
import type { VerificationTypes } from './types'
import { getDomainUrl } from './utils'

export const verifySessionStorage = createCookieSessionStorage({
	cookie: {
		name: 'admin_verification',
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
		secrets: process.env.SESSION_SECRET.split(','),
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 10,
	},
})

export function getRedirectToUrl({
	request,
	type,
	target,
	redirectTo,
}: {
	request: Request
	type: VerificationTypes
	target: string
	redirectTo?: string
}) {
	const redirectToUrl = new URL(`${getDomainUrl(request)}/verify`)
	redirectToUrl.searchParams.set(typeQueryParam, type)
	redirectToUrl.searchParams.set(targetQueryParam, target)
	if (redirectTo) {
		redirectToUrl.searchParams.set(redirectToQueryParam, redirectTo)
	}
	return redirectToUrl
}

export async function shouldRequestTwoFA({
	request,
	userId,
}: {
	request: Request
	userId: string
}) {
	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	)
	const unverifiedSessionId = verifySession.get(unverifiedSessionIdKey)
	if (unverifiedSessionId) return true

	const verification = await prisma.verification.findUnique({
		select: { id: true },
		where: {
			target_type: {
				target: userId,
				type: twoFAVerificationType,
			},
		},
	})

	const userHasTwoFAEnabled = Boolean(verification)
	if (!userHasTwoFAEnabled) return false

	const cookieSession = await sessionStorage.getSession(
		request.headers.get('cookie'),
	)
	const verifiedTime = new Date(cookieSession.get(verifiedTimeKey) ?? 0)
	if (!verifiedTime) return true

	const twoHoursAgo = 2 * 60 * 60 * 1000

	return Date.now() - verifiedTime.getTime() > twoHoursAgo
}
