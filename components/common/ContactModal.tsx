'use client';

import styles from './ContactModal.module.scss';
import cn from 'classnames';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { Modal, Loader } from '@/components';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { styleVariables } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';

export type Props = {
	onClose: () => void;
	show: boolean;
	message: string;
};

export default function ContactModal({ onClose, show = false, message }: Props) {
	const { register, handleSubmit, reset, setFocus } = useForm();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<Error | string | undefined>();
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const ref = useRef<HTMLInputElement | null>(null);

	const [data, setData] = useState('');

	const resetForm = useCallback(() => {
		setSuccess(false);
		setError(undefined);
		setLoading(false);
		reset();
	}, [setSuccess, setError, setLoading, reset]);

	useEffect(() => {
		if (!data) return;

		setLoading(true);

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: data,
		})
			.then(async (res) => {
				if (res.status !== 200) setError(await res.json());
				else setSuccess(true);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [data]);

	useEffect(() => {
		if (!show) setTimeout(resetForm, 300);
		if (!isMobile) setFocus('name');
	}, [show, ref, resetForm, setFocus, isMobile]);

	return (
		<Modal>
			<div className={cn(styles.contactModal, show && styles.show)}>
				<div className={styles.wrap}>
					<h1>Contact us</h1>

					<div className={styles.text}>
						<p className='medium'>
							<span>OBS!</span> Vi kan tyvärr inte erbjuda teknisk support till privatpersoner,
							vänligen kontakta någon av våra{' '}
							<a href='https://www.orsjo.com/contact#retailers'>återförsäljare</a>. Vi har samlat de
							vanligaste frågorna med svar på vår{' '}
							<a href='https://www.orsjo.com/support/faq'>FAQ-sida.</a>
						</p>
						<p className='medium'>
							<span>NOTE!</span> We&apos;re not able to offer techical support for private
							customers, intead, please contact one of our{' '}
							<a href='https://www.orsjo.com/contact#retailers'>retailers</a>. We&apos;ve collected
							the most common questions on our{' '}
							<a href='https://www.orsjo.com/support/faq'>FAQ page.</a>
						</p>
					</div>

					{error && (
						<div className={styles.error}>{typeof error === 'string' ? error : error.message}</div>
					)}
					<form id='contact-form' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
						<label htmlFor='name' className='medium'>
							Name
						</label>
						<input
							id='name'
							type='text'
							autoComplete='off'
							{...register('name', { required: true, minLength: 3 })}
						/>

						<label htmlFor='email' className='medium'>
							E-mail
						</label>
						<input
							id='email'
							type='text'
							{...register('email', {
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							})}
						/>

						<label htmlFor='subject' className='medium'>
							Subject
						</label>
						<input
							id='subject'
							type='text'
							autoComplete='off'
							{...register('subject', { required: true })}
						/>

						<label htmlFor='text' className='medium'>
							Message
						</label>
						<textarea {...register('text', { required: true })} />
						<button type='submit'>Send message</button>
					</form>

					{loading && (
						<div className={styles.loading}>
							<Loader invert={true} />
						</div>
					)}
					{success && (
						<div className={styles.success}>
							<Markdown>{message}</Markdown>
							<button onClick={onClose}>Close</button>
						</div>
					)}
				</div>
				<div className={styles.close} onClick={onClose}>
					×
				</div>
			</div>
		</Modal>
	);
}
