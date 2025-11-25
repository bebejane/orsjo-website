import s from './Loader.module.scss';

export default function Loader({
	invert = false,
	loading = false,
	className = '',
}: {
	invert?: boolean;
	loading?: boolean;
	className?: string;
}) {
	return <img className={s.loader} src={`/images/loader${invert ? '_black' : ''}.gif`} />;
}
