import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { Form } from 'react-router'
import { z } from 'zod'
import { CheckboxField } from '~/components/checkbox-field'
import { CheckboxGroupField } from '~/components/checkbox-group-field'
import { CountryPickerField } from '~/components/country-picker-field'
import { DatePickerField } from '~/components/date-picker-field'
import { Field, FieldError } from '~/components/field'
import { InputField } from '~/components/input-field'
import { OtpField } from '~/components/otp-field'
import { RadioGroupField } from '~/components/radio-group-field'
import { SelectField } from '~/components/select-field'
import { SliderField } from '~/components/slider-field'
import { SwitchField } from '~/components/switch-field'
import { TextareaField } from '~/components/textarea-field'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import type { Route } from './+types/settings'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Admin | Settings' },
		{ name: 'description', content: 'Admin | Settings' },
	]
}

const UserSubscriptionSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(3, { message: 'Name must be at least 3 characters long' }),
	dateOfBirth: z
		.date({
			required_error: 'Date of birth is required',
			invalid_type_error: 'Invalid date',
		})
		.max(new Date(), { message: 'Date of birth cannot be in the future' }),
	country: z.string({ required_error: 'Country is required' }),
	gender: z.enum(['male', 'female', 'other'], {
		required_error: 'Gender is required',
	}),
	agreeToTerms: z.boolean({ required_error: 'You must agree to the terms' }),
	job: z.enum(['developer', 'designer', 'manager'], {
		required_error: 'You must select a job',
	}),
	age: z.number().min(18, 'You must have be more than 18'),
	isAdult: z
		.boolean()
		.optional()
		.refine(val => val == true, 'You must be an adult'),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	accountType: z.enum(['personal', 'business'], {
		required_error: 'You must select an account type',
	}),
	accountTypes: z
		.array(z.enum(['personal', 'business']))
		.min(1, 'You must select at least one account type'),
	interests: z
		.array(z.string())
		.min(3, 'You must select at least three interest'),
	code: z.string().length(6, 'Code must be 6 characters long'),
})

export default function Settings() {
	const [form, fields] = useForm({
		id: 'signup',
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: UserSubscriptionSchema })
		},
		onSubmit(e) {
			e.preventDefault()
			const form = e.currentTarget
			const formData = new FormData(form)
			const result = parseWithZod(formData, { schema: UserSubscriptionSchema })
			alert(JSON.stringify(result, null, 2))
		},
		shouldRevalidate: 'onInput',
	})

	return (
		<div className="flex h-screen flex-col gap-6 overflow-y-auto p-10">
			<h1 className="text-2xl">Shadcn + Conform example</h1>
			<Form
				method="POST"
				id={form.id}
				onSubmit={form.onSubmit}
				className="flex flex-col items-start gap-4"
			>
				<Field>
					<Label htmlFor={fields.name.id}>Name</Label>
					<InputField meta={fields.name} type="text" />
					{fields.name.errors && <FieldError>{fields.name.errors}</FieldError>}
				</Field>
				<Field>
					<Label htmlFor={fields.dateOfBirth.id}>Birth date</Label>
					<DatePickerField meta={fields.dateOfBirth} />
					{fields.dateOfBirth.errors && (
						<FieldError>{fields.dateOfBirth.errors}</FieldError>
					)}
				</Field>
				<Field>
					<Label htmlFor={fields.country.id}>Country</Label>
					<CountryPickerField meta={fields.country} />
					{fields.country.errors && (
						<FieldError>{fields.country.errors}</FieldError>
					)}
				</Field>
				<Field>
					<Label htmlFor={fields.gender.id}>Gender</Label>
					<RadioGroupField
						meta={fields.gender}
						items={[
							{ value: 'male', label: 'male' },
							{ value: 'female', label: 'female' },
							{ value: 'other', label: 'other' },
						]}
					/>
					{fields.gender.errors && (
						<FieldError>{fields.gender.errors}</FieldError>
					)}
				</Field>
				<Field>
					<div className="flex items-center gap-2">
						<CheckboxField meta={fields.agreeToTerms} />
						<Label htmlFor={fields.agreeToTerms.id}>Agree to terms</Label>
					</div>
					{fields.agreeToTerms.errors && (
						<FieldError>{fields.agreeToTerms.errors}</FieldError>
					)}
				</Field>
				<Field>
					<Label htmlFor={fields.job.id}>Job</Label>
					<SelectField
						placeholder="Select a job"
						meta={fields.job}
						items={[
							{ value: 'developer', name: 'Developer' },
							{ value: 'designer', name: 'Design' },
							{ value: 'manager', name: 'Manager' },
						]}
					/>
					{fields.job.errors && <FieldError>{fields.job.errors}</FieldError>}
				</Field>
				<Field>
					<Label htmlFor={fields.age.id}>Age</Label>
					<SliderField meta={fields.age} step={1} />
					{fields.age.errors && <FieldError>{fields.age.errors}</FieldError>}
				</Field>
				<Field>
					<div className="flex items-center gap-2">
						<Label htmlFor={fields.isAdult.id}>Is adult</Label>
						<SwitchField meta={fields.isAdult} />
					</div>
					{fields.isAdult.errors && (
						<FieldError>{fields.isAdult.errors}</FieldError>
					)}
				</Field>
				<Field>
					<Label htmlFor={fields.description.id}>Description</Label>
					<TextareaField meta={fields.description} />
					{fields.description.errors && (
						<FieldError>{fields.description.errors}</FieldError>
					)}
				</Field>
				<Field>
					<fieldset>Interests</fieldset>
					<CheckboxGroupField
						meta={fields.interests}
						items={[
							{ value: 'react', name: 'React' },
							{ value: 'vue', name: 'Vue' },
							{ value: 'svelte', name: 'Svelte' },
							{ value: 'angular', name: 'Angular' },
						]}
					/>
					{fields.interests.errors && (
						<FieldError>{fields.interests.errors}</FieldError>
					)}
				</Field>
				<Field>
					<Label htmlFor={fields.code.id}>Code</Label>
					<OtpField meta={fields.code} length={6} />
					{fields.code.errors && <FieldError>{fields.code.errors}</FieldError>}
				</Field>

				<div className="flex gap-2">
					<Button type="submit">Submit</Button>
					<Button type="reset" variant="outline">
						Reset
					</Button>
				</div>
			</Form>
		</div>
	)
}
