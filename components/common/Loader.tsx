import s from './Loader.module.scss';
<<<<<<< HEAD
=======
import cn from 'classnames';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default function Loader({
	invert = false,
	loading = false,
	className = '',
}: {
	invert?: boolean;
	loading?: boolean;
	className?: string;
}) {
<<<<<<< HEAD
	return <img className={s.loader} src={`/images/loader${invert ? '_black' : ''}.gif`} />;
=======
	return (
		<div className={cn(s.loader, invert && s.invert)}>
			<span />
			<span />
			<span />
		</div>
	);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
