import s from './Page.module.scss';
import cn from 'classnames';

type PageProps = { children: React.ReactNode; autoHeight?: boolean };

export default function Page({ children, autoHeight }: PageProps) {
	return <section className={cn(s.page, autoHeight && s.autoHeight)}>{children}</section>;
}
