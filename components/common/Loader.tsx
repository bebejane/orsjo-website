import s from './Loader.module.scss';
import cn from 'classnames';

export default function Loader({
	invert = false,
	loading = false,
	className = '',
}: {
	invert?: boolean;
	loading?: boolean;
	className?: string;
}) {
	return (
		<div className={cn(s.loader, invert && s.invert)}>
			<span />
			<span />
			<span />
		</div>
	);
}
