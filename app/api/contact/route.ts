import { sendContactAutoReplyEmail } from '@/lib/email';
import { ContactFormSchema } from '@/lib/schemas';
import { sendPostmarkEmail } from 'next-dato-utils/utils';
import { z, ZodError } from 'zod';
import { isbot } from 'isbot';

export async function POST(req: Request) {
	try {
		const data = await req.json();
		const { name, email, confirm_email, subject, message } = ContactFormSchema.parse(data);

		if (isbot(req.headers.get('User-Agent')) || (confirm_email && confirm_email?.length > 0)) {
			console.log('contact form', 'bot detected');
			return new Response(JSON.stringify({ success: false, error: 'Bots are not allowed.' }), { status: 403 });
		}

		await sendPostmarkEmail({
			subject,
			text: `${message} \n\n${name}\n${email} `,
			to: process.env.POSTMARK_FROM_EMAIL as string,
		});

		await sendContactAutoReplyEmail({
			email,
			name,
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (e) {
		console.log(e);
		if (e instanceof ZodError) {
			return new Response(JSON.stringify({ invalid: e, success: false }), { status: 200 });
		} else
			return new Response(JSON.stringify({ success: false, error: typeof e === 'string' ? e : (e as Error).message }), {
				status: 500,
			});
	}
}
