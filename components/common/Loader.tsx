import s from './Loader.module.scss';

export default function Loader({ invert = false }: { invert?: boolean }) {
	return <img className={s.loader} src={`/images/loader${invert ? '_black' : ''}.gif`} />;
}
