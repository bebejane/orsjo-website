'use client';

import s from './CancelPurchaseForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Markdown } from 'next-dato-utils/components';
import { Loader } from '@/components';
import z, { ZodError } from 'zod';
import { useState } from 'react';
import { CancelPurchaseFormSchema } from '@/lib/schemas';

export type Props = {
	eMailText: string;
};

type CancelPurchaseFormInputs = z.infer<typeof CancelPurchaseFormSchema>;

const initialState: any = {
	order_number: '',
	email: '',
	confirm_email: '',
	message: '',
};

export default function CancelPurchaseForm({ eMailText }: Props) {
	const { register, handleSubmit } = useForm<CancelPurchaseFormInputs>();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [invalid, setInvalid] = useState<ZodError<CancelPurchaseFormInputs> | null>(null);

	const onSubmit: SubmitHandler<CancelPurchaseFormInputs> = async (data) => {
		try {
			setLoading(true);
			setSuccess(false);
			setError(null);
			setInvalid(null);

			const body = CancelPurchaseFormSchema.parse(data);
			const res = await fetch('/api/cancel-purchase', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const json = await res.json();

			if (res.ok) {
				if (json.invalid) setInvalid(json.invalid as ZodError);
				setSuccess(json.success);
			} else {
				setError(json.error?.message ?? json.error ?? 'Something went wrong');
			}
		} catch (e) {
			if (e instanceof ZodError) setInvalid(e);
			else setError(typeof e === 'string' ? e : (e as Error).message);
		} finally {
			setLoading(false);
		}
	};

	const errors = (id: string) => {
		const message = invalid?.issues?.find((e) => e?.path?.includes(id))?.message;
		return message ? <div className={s.error}>{message}</div> : null;
	};

	return (
		<div className={s.container}>
			<form id='cancel-purchase-form' onSubmit={handleSubmit(onSubmit)} className={s.form}>
				<div className={s.wrap}>
					<label htmlFor='order_number' className='medium'>
						Order No.
					</label>
					<input
						id='order_number'
						type='text'
						autoComplete='off'
						defaultValue={initialState.order_number}
						{...register('order_number')}
					/>
					{errors('order_number')}
				</div>
				<div className={s.wrap}>
					<label htmlFor='email' className='medium'>
						E-mail
					</label>
					<input id='email' type='email' defaultValue={initialState.email} {...register('email')} />
					{errors('email')}
					<input
						id='confirm_email'
						type='text'
						defaultValue={initialState.confirm_email}
						{...register('confirm_email')}
						style={{ display: 'none' }}
					/>
				</div>
				<div className={s.wrap}>
					<label htmlFor='message' className='medium'>
						Message
					</label>
					<textarea id='message' defaultValue={initialState.message} {...register('message')} />
					{errors('message')}
				</div>
				<button type='submit'>Send cancellation request</button>
			</form>
			{error && (
				<div className={s.formerror}>
					<h2>Something went wrong</h2>
					<span>{error}</span>
				</div>
			)}
			{loading && (
				<div className={s.loading}>
					<Loader invert={true} />
				</div>
			)}
			{success && <div className={s.success}>Thank you for your message!</div>}
		</div>
	);
}
