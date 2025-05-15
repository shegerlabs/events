import { getFormProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { prisma } from '@repo/database'
import {
	data,
	Form,
	Link,
	redirect,
	useActionData,
	useLoaderData,
	useSearchParams,
} from 'react-router'
import { AuthenticityTokenInput } from 'remix-utils/csrf/react'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { safeRedirect } from 'remix-utils/safe-redirect'
import { z } from 'zod'
import { CheckboxField } from '~/components/checkbox-field'
import { ErrorList } from '~/components/error-list'
import { Field, FieldError } from '~/components/field'
import { InputField } from '~/components/input-field'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/components/ui/card'
import { Label } from '~/components/ui/label'
import { StatusButton } from '~/components/ui/status-button'
import {
	getSessionExpirationDate,
	requireAnonymous,
	signup,
} from '~/lib/auth.server'
import { sessionKey } from '~/lib/constants'
import { validateCSRF } from '~/lib/csrf.server'
import { checkHoneypot } from '~/lib/honeypot.server'
import { authSessionStorage } from '~/lib/session.server'
import { useIsPending } from '~/lib/utils'
import {
	requireOnboardingEmail,
	verifySessionStorage,
} from '~/lib/verification.server'
import type { Route } from './+types/onboarding'

const SignupSchema = z
	.object({
		username: z
			.string({ required_error: 'Username is required' })
			.transform(v => v.toLowerCase()),
		firstName: z.string({ required_error: 'First name is required' }),
		lastName: z.string({ required_error: 'Last name is required' }),
		password: z.string({ required_error: 'Password is required' }),
		confirmPassword: z.string({
			required_error: 'Confirm password is required',
		}),
		agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
			required_error:
				'You must agree to the terms of service and privacy policy',
		}),
		remember: z.boolean().optional(),
		redirectTo: z.string().optional(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				path: ['confirmPassword'],
				code: 'custom',
				message: 'The passwords must match',
			})
		}
	})

export async function loader({ request }: Route.LoaderArgs) {
	await requireAnonymous(request)
	const email = await requireOnboardingEmail(request)

	return data({ email })
}

export async function action({ request }: Route.ActionArgs) {
	await requireAnonymous(request)
	const email = await requireOnboardingEmail(request)

	const formData = await request.formData()
	await validateCSRF(formData, request.headers)
	checkHoneypot(formData)
	const submission = await parseWithZod(formData, {
		schema: SignupSchema.superRefine(async (data, ctx) => {
			const [existingUserByEmail, existingUserByUsername] = await Promise.all([
				prisma.user.findUnique({
					where: { email },
					select: { id: true },
				}),
				prisma.user.findUnique({
					where: { username: data.username },
					select: { id: true },
				}),
			])

			if (existingUserByEmail) {
				ctx.addIssue({
					path: ['email'],
					code: z.ZodIssueCode.custom,
					message: 'A user already exists with this email',
				})
			}

			if (existingUserByUsername) {
				ctx.addIssue({
					path: ['username'],
					code: z.ZodIssueCode.custom,
					message: 'This username is already taken',
				})
			}
		}).transform(async data => {
			const session = await signup({ ...data, email, request })
			return { ...data, session }
		}),
		async: true,
	})

	if (submission.status !== 'success') {
		return data(
			{ result: submission.reply() },
			{ status: submission.status === 'error' ? 400 : 200 },
		)
	}

	const { session, remember, redirectTo } = submission.value

	const cookieSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	)
	cookieSession.set(sessionKey, session.id)

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	)
	const headers = new Headers()
	headers.append(
		'set-cookie',
		await authSessionStorage.commitSession(cookieSession, {
			expires: remember ? getSessionExpirationDate() : undefined,
		}),
	)
	headers.append(
		'set-cookie',
		await verifySessionStorage.destroySession(verifySession),
	)

	return redirect(safeRedirect(redirectTo), { headers })
}

export default function SignupRoute() {
	const { email } = useLoaderData<typeof loader>()
	const actionData = useActionData<typeof action>()
	const isPending = useIsPending()
	const [searchParams] = useSearchParams()
	const redirectTo = searchParams.get('redirectTo')

	const [form, fields] = useForm({
		id: 'signup-form',
		constraint: getZodConstraint(SignupSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: SignupSchema })
		},
		shouldRevalidate: 'onBlur',
		defaultValue: {
			redirectTo,
		},
	})

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-lg">
				<div className="flex flex-col gap-6">
					<Card>
						<CardHeader>
							<CardTitle className="text-xl">Welcome aboard, {email}</CardTitle>
							<CardDescription>
								Enter your information to create an account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form
								className="grid gap-4"
								method="POST"
								{...getFormProps(form)}
							>
								<AuthenticityTokenInput />
								<HoneypotInputs />
								<InputField meta={fields.redirectTo} type="hidden" />
								<div className="grid gap-4">
									<Field>
										<Label htmlFor={fields.username.id}>Username</Label>
										<InputField meta={fields.username} type="text" />
										{fields.username.errors && (
											<FieldError>{fields.username.errors}</FieldError>
										)}
									</Field>
									<Field>
										<Label htmlFor={fields.firstName.id}>First Name</Label>
										<InputField meta={fields.firstName} type="text" />
										{fields.firstName.errors && (
											<FieldError>{fields.firstName.errors}</FieldError>
										)}
									</Field>
									<Field>
										<Label htmlFor={fields.lastName.id}>Last Name</Label>
										<InputField meta={fields.lastName} type="text" />
										{fields.lastName.errors && (
											<FieldError>{fields.lastName.errors}</FieldError>
										)}
									</Field>
									<Field>
										<Label htmlFor={fields.password.id}>Password</Label>
										<InputField meta={fields.password} type="password" />
										{fields.password.errors && (
											<FieldError>{fields.password.errors}</FieldError>
										)}
									</Field>
									<Field>
										<Label htmlFor={fields.confirmPassword.id}>
											Confirm Password
										</Label>
										<InputField meta={fields.confirmPassword} type="password" />
										{fields.confirmPassword.errors && (
											<FieldError>{fields.confirmPassword.errors}</FieldError>
										)}
									</Field>

									<Field>
										<div className="flex items-center gap-2">
											<CheckboxField
												meta={fields.agreeToTermsOfServiceAndPrivacyPolicy}
											/>
											<Label
												htmlFor={
													fields.agreeToTermsOfServiceAndPrivacyPolicy.id
												}
											>
												Do you agree to the terms of service and privacy policy?
											</Label>
										</div>
										{fields.agreeToTermsOfServiceAndPrivacyPolicy.errors && (
											<FieldError>
												{fields.agreeToTermsOfServiceAndPrivacyPolicy.errors}
											</FieldError>
										)}
									</Field>

									<Field>
										<div className="flex items-center gap-2">
											<CheckboxField meta={fields.remember} />
											<Label htmlFor={fields.remember.id}>Remember me</Label>
										</div>
									</Field>

									<ErrorList errors={form.errors} id={form.errorId} />

									<StatusButton
										className="w-full"
										status={isPending ? 'pending' : (form.status ?? 'idle')}
										type="submit"
										disabled={isPending}
									>
										Create an account
									</StatusButton>
								</div>
								<div className="mt-4 text-center text-sm">
									Already have an account?{' '}
									<Link to="/login" className="underline">
										Sign in
									</Link>
								</div>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
