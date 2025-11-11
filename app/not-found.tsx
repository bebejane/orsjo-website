import Link from '@/components//nav/Link';
import s from './not-found.module.scss';

export default function NotFound() {
	return (
		<div className={s.container}>
			<h3>404 Not Found</h3>
			<Link href='/'>Return home</Link>
		</div>
	);
}
