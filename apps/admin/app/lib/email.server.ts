export async function sendEmail(options: {
	to: string
	subject: string
	html?: string
	text: string
}) {
	const email = {
		from: 'noreply@binalfew.com',
		...options,
	}

	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		body: JSON.stringify(email),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
		},
	})

	const data = await response.json()

	if (response.ok) {
		return {
			status: 'success',
		} as const
	}

	return {
		status: 'error',
		error: data?.error.message,
	} as const
}
