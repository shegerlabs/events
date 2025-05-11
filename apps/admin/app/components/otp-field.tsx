import {
	type FieldMetadata,
	unstable_useControl as useControl,
} from '@conform-to/react'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { type ComponentRef, useRef } from 'react'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '~/components/ui/input-otp'

export function OtpField({
	meta,
	length = 6,
	pattern = REGEXP_ONLY_DIGITS_AND_CHARS,
}: {
	meta: FieldMetadata<string>
	length: number
	pattern?: string
}) {
	const inputOTPRef = useRef<ComponentRef<typeof InputOTP>>(null)
	const control = useControl(meta)

	return (
		<>
			<input
				ref={control.register}
				name={meta.name}
				defaultValue={meta.initialValue}
				tabIndex={-1}
				className="sr-only"
				onFocus={() => {
					inputOTPRef.current?.focus()
				}}
			/>
			<InputOTP
				ref={inputOTPRef}
				value={control.value ?? ''}
				onChange={control.change}
				onBlur={control.blur}
				maxLength={6}
				pattern={pattern}
			>
				<InputOTPGroup>
					{new Array(length).fill(0).map((_, index) => (
						<InputOTPSlot key={index} index={index} />
					))}
				</InputOTPGroup>
			</InputOTP>
		</>
	)
}
