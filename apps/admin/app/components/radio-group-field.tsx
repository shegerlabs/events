import {
	type FieldMetadata,
	unstable_useControl as useControl,
} from '@conform-to/react'
import { type ComponentRef, useRef } from 'react'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'

export function RadioGroupField({
	meta,
	items,
}: {
	meta: FieldMetadata<string>
	items: Array<{ value: string; label: string }>
}) {
	const radioGroupRef = useRef<ComponentRef<typeof RadioGroup>>(null)
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
					radioGroupRef.current?.focus()
				}}
			/>
			<RadioGroup
				ref={radioGroupRef}
				className="flex items-center gap-4"
				value={control.value ?? ''}
				onValueChange={control.change}
				onBlur={control.blur}
			>
				{items.map(item => {
					return (
						<div className="flex items-center gap-2" key={item.value}>
							<RadioGroupItem
								value={item.value}
								id={`${meta.id}-${item.value}`}
							/>
							<label htmlFor={`${meta.id}-${item.value}`}>{item.label}</label>
						</div>
					)
				})}
			</RadioGroup>
		</>
	)
}
