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
		<img className={cn(s.loader, className)} src={`/images/loader${invert ? '_black' : ''}.gif`} />
	);
}
