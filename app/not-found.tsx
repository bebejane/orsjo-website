import Link from '@/components//nav/Link';
import s from './not-found.module.scss';

<<<<<<< HEAD
=======
export const dynamic = 'force-dynamic';

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
export default function NotFound() {
	return (
		<div className={s.container}>
			<h3>404 Not Found</h3>
			<Link href='/'>Return home</Link>
		</div>
	);
}
