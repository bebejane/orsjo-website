'use client';

import { useActionState } from 'react';
import { loginAction } from '@/pricelist/lib/actions/auth';
import s from './page.module.scss';

export default function LoginPage() {
	const [state, formAction, pending] = useActionState(loginAction, null);

	return (
		<div className={s.container}>
			<form className={s.form} action={formAction}>
				<h1>Catalogue</h1>
				<div className={s.field}>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						autoFocus
						required
					/>
				</div>
				{state?.error && <p className={s.error}>{state.error}</p>}
				<button type='submit' disabled={pending} className={s.button}>
					{pending ? 'Logging in...' : 'Log in'}
				</button>
			</form>
		</div>
	);
}
