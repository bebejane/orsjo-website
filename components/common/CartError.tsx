import s from './CartError.module.scss';

type CartErrorProps = {
	error?: Error | string | null | undefined;
	closeLabel?: string;
	onClose?: () => void;
};

export default function CartError({ error, closeLabel, onClose }: CartErrorProps) {
	if (!error) return null;

	let message = null;
	if (error instanceof Error) message = error.message;
	else if (typeof error === 'string') message = error;
	else message = String(error);

	return (
		<div id='cart-error' className={s.error} role='alert'>
			<div className={s.wrap}>
				<h3>Something went wrong</h3>
				<p className={s.message}>{message}</p>
				<button className={s.close} onClick={() => onClose?.()}>
					{closeLabel ?? 'Close'}
				</button>
			</div>
		</div>
	);
}
