import { sendWithdrawFromPurchaseEmail, sendWithdrawFromPurchaseReplyEmail } from '@/lib/email';
import { WithdrawFromPurchaseFormSchema } from '@/lib/schemas';
import { ZodError } from 'zod';
import { isbot } from 'isbot';

export async function POST(req: Request) {
	try {
		const data = await req.json();
		const { order_number, email, confirm_email, message } =
			WithdrawFromPurchaseFormSchema.parse(data);

		if (isbot(req.headers.get('User-Agent')) || (confirm_email && confirm_email?.length > 0)) {
			console.log('cancel-purchase form', 'bot detected');
			return new Response(JSON.stringify({ success: false, error: 'Bots are not allowed.' }), {
				status: 403,
			});
		}

		await sendWithdrawFromPurchaseEmail({
			email: process.env.POSTMARK_FROM_EMAIL as string,
			orderNo: order_number,
			message,
		});

		await sendWithdrawFromPurchaseReplyEmail({
			email,
			orderNo: order_number,
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (e) {
		console.log(e);
		if (e instanceof ZodError) {
			return new Response(JSON.stringify({ invalid: e, success: false }), { status: 200 });
		} else
			return new Response(
				JSON.stringify({ success: false, error: typeof e === 'string' ? e : (e as Error).message }),
				{
					status: 500,
				},
			);
	}
}
