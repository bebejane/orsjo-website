'use client';

import s from './ContactForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Markdown } from 'next-dato-utils/components';
import { Loader } from '@/components';
import z, { ZodError } from 'zod';
import { useState } from 'react';
import { ContactFormSchema } from '@/lib/schemas';

export type Props = {
	contactFormMessage: string;
};

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const initialState: any = {
	name: '',
	email: '',
	confirm_email: '',
	subject: '',
	message: '',
};

export default function ContactForm({ contactFormMessage }: Props) {
	const { register, handleSubmit, watch, formState: inititalState } = useForm<ContactFormInputs>();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [invalid, setInvalid] = useState<ZodError<ContactFormInputs> | null>(null);

	const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
		try {
			setLoading(true);
			setSuccess(false);
			setError(null);
			setInvalid(null);

			const body = ContactFormSchema.parse(data);
			const res = await fetch('/api/contact', {
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
		<>
			<form id='contact-form' onSubmit={handleSubmit(onSubmit)} className={s.form}>
				<div className={s.wrap}>
					<label htmlFor='name' className='medium'>
						Name
					</label>
					<input id='name' type='text' autoComplete='off' defaultValue={initialState.name} {...register('name')} />
					{errors('name')}
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
					<label htmlFor='subject' className='medium'>
						Subject
					</label>
					<input
						id='subject'
						type='text'
						autoComplete='off'
						defaultValue={initialState.subject}
						{...register('subject')}
					/>
					{errors('subject')}
				</div>
				<div className={s.wrap}>
					<label htmlFor='message' className='medium'>
						Message
					</label>
					<textarea id='message' defaultValue={initialState.message} {...register('message')} />
					{errors('message')}
				</div>
				<button type='submit'>Send message</button>
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
			{success && (
				<div className={s.success}>
					<Markdown content={contactFormMessage} />
				</div>
			)}
		</>
	);
}
