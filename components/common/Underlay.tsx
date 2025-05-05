'use client';

import s from './Underlay.module.scss';
import cn from 'classnames';
import { useStore, useShallow } from '@/lib/store';

export default function Underlay(props) {
	const [showSiteSearch, showSubMenu] = useStore(
		useShallow((state) => [state.showSiteSearch, state.showSubMenu])
	);
	return <div className={cn(s.underlay, (showSiteSearch || showSubMenu) && s.show)}></div>;
}
