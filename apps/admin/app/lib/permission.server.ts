import { prisma } from '@repo/database'
import { data } from 'react-router'
import { requireUserId } from './auth.server'
import type { PermissionString } from './user'
import { parsePermissionString } from './user'

export async function requireUserWithRole(request: Request, name: string) {
	const userId = await requireUserId(request)
	const user = await prisma.user.findFirst({
		select: { id: true, email: true },
		where: { id: userId, roles: { some: { name } } },
	})

	if (!user) {
		throw data(
			{
				error: 'Unauthorized',
				requiredRole: name,
				message: `Unauthorized: required role: ${name}`,
			},
			{ status: 403 },
		)
	}

	return user
}

export async function requireUserWithRoles(request: Request, roles: string[]) {
	const userId = await requireUserId(request)
	const user = await prisma.user.findFirst({
		select: { id: true, email: true, username: true },
		where: {
			id: userId,
			roles: {
				some: {
					name: { in: roles },
				},
			},
		},
	})

	if (!user) {
		throw data(
			{
				error: 'Unauthorized',
				requiredRoles: roles,
				message: `Unauthorized: required roles: ${roles.join(', ')}`,
			},
			{ status: 403 },
		)
	}

	return user
}

export async function requireUserWithPermission(
	request: Request,
	permission: PermissionString,
) {
	const userId = await requireUserId(request)
	const permissionData = parsePermissionString(permission)
	const user = await prisma.user.findFirst({
		select: { id: true },
		where: {
			id: userId,
			roles: {
				some: {
					permissions: {
						some: {
							...permissionData,
							access: permissionData.access
								? { in: permissionData.access }
								: undefined,
						},
					},
				},
			},
		},
	})

	if (!user) {
		throw data(
			{
				error: 'Unauthorized',
				requiredPermission: permissionData,
				message: `Unauthorized: required permissions: ${permission}`,
			},
			{ status: 403 },
		)
	}
	return user.id
}

export async function userIsAdmin(request: Request) {
	const userId = await requireUserId(request)
	const user = await prisma.user.findFirst({
		select: { id: true, email: true },
		where: {
			id: userId,
			roles: {
				some: {
					name: { in: ['admin'] },
				},
			},
		},
	})

	return !!user
}
