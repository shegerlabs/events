import { getFormProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { prisma } from '@repo/database'
import { data, Form, Link, redirect, useSearchParams } from 'react-router'
import { AuthenticityTokenInput } from 'remix-utils/csrf/react'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { z } from 'zod'
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
import { requireAnonymous } from '~/lib/auth.server'
import { validateCSRF } from '~/lib/csrf.server'
import { sendEmail } from '~/lib/email.server'
import { checkHoneypot } from '~/lib/honeypot.server'
import { useIsPending } from '~/lib/utils'
import { prepareVerification } from '~/lib/verification.server'
import type { Route } from './+types/signup'

const SignupSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email is invalid' })
		.min(3, { message: 'Email is too short' })
		.max(100, { message: 'Email is too long' })
		.transform(value => value.toLowerCase()),
	redirectTo: z.string().optional(),
})

export async function loader({ request }: Route.LoaderArgs) {
	await requireAnonymous(request)

	return data({})
}

export async function action({ request }: Route.ActionArgs) {
	await requireAnonymous(request)
	const formData = await request.formData()
	await validateCSRF(formData, request.headers)
	checkHoneypot(formData)
	const submission = await parseWithZod(formData, {
		schema: SignupSchema.superRefine(async (data, ctx) => {
			const existingUser = await prisma.user.findUnique({
				where: { email: data.email },
				select: { id: true },
			})

			if (existingUser) {
				ctx.addIssue({
					path: ['username'],
					code: z.ZodIssueCode.custom,
					message: 'A user already exists with this username',
				})
				return
			}
		}),
		async: true,
	})

	if (submission.status !== 'success') {
		return data(
			{ result: submission.reply() },
			{ status: submission.status === 'error' ? 400 : 200 },
		)
	}

	const { email } = submission.value

	const { verifyUrl, redirectTo, otp } = await prepareVerification({
		period: 10 * 60,
		request,
		type: 'onboarding',
		target: email,
	})

	const response = await sendEmail({
		to: email,
		subject: 'Welcome to Accreditation',
		text: `Here is your verification code: ${otp}. Click here to verify your email: ${verifyUrl.toString()}`,
		html: `Here's your verification code: <strong>${otp}</strong>. Or open this: <a href="${verifyUrl.toString()}">${verifyUrl.toString()}</a>`,
	})

	if (response.status === 'success') {
		return redirect(redirectTo.toString())
	} else {
		return data(
			{
				result: submission.reply({ formErrors: [response.error.message] }),
			},
			{
				status: 500,
			},
		)
	}
}

export default function SignupRoute({ actionData }: Route.ComponentProps) {
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
							<CardTitle className="text-xl">Sign Up</CardTitle>
							<CardDescription>
								Let&apos;s get you started on your journey to becoming
								accredited
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
										<Label htmlFor={fields.email.id}>Email</Label>
										<InputField meta={fields.email} type="text" />
										{fields.email.errors && (
											<FieldError>{fields.email.errors}</FieldError>
										)}
									</Field>

									<ErrorList errors={form.errors} id={form.errorId} />

									<StatusButton
										className="w-full"
										status={isPending ? 'pending' : (form.status ?? 'idle')}
										type="submit"
										disabled={isPending}
									>
										Submit
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
