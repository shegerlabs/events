export const Field = ({ children }: { children: React.ReactNode }) => {
	return <div className="grid gap-3">{children}</div>
}

export const FieldError = ({ children }: { children: React.ReactNode }) => {
	return <div className="text-sm text-red-600">{children}</div>
}
