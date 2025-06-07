'use client';

import s from './Underlay.module.scss';
import cn from 'classnames';
import { useStore, useShallow } from '@/lib/store';

export default function Underlay(props) {
	const [showSiteSearch, showSubMenu, showCart, setShowCart] = useStore(
		useShallow((state) => [
			state.showSiteSearch,
			state.showSubMenu,
			state.showCart,
			state.setShowCart,
		])
	);
	return (
		<div className={cn(s.underlay, (showSiteSearch || showSubMenu || showCart) && s.show)}></div>
	);
}
