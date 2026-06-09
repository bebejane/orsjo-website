'use client';

import 'swiper/css';
import s from './FeaturedStart.module.scss';
import cn from 'classnames';
import { FeaturedGallery } from '@/components';
import { usePage } from '@/lib/context/page-provider';
<<<<<<< HEAD

export type ImageGalleryProps = { data: FeaturedRecord; fadeColor?: number[] };

export default function FeaturedStart({ data: { headline, items, id } }: ImageGalleryProps) {
	const { inverted } = usePage();
	const isProducts = items[0].__typename === 'ProductRecord';

	return (
		<div className={cn(s.featuredStart, inverted && s.inverted)}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<h1 className={s.headline}>{headline}</h1>
				</div>
				<div className={s.gallery}>
=======
import { stripStega, decodeStega } from '@datocms/content-link';

export type FeaturedStartProps = { data: FeaturedRecord; fadeColor?: number[] };

export default function FeaturedStart({ data }: FeaturedStartProps) {
	const { inverted } = usePage();
	const { headline, items, id } = stripStega(data);
	const isProducts = items[0].__typename === 'ProductRecord';

	return (
		<section className={cn(s.featuredStart, inverted && s.inverted)} data-double-margin={true}>
			<div className={s.wrapper}>
				<div className={s.header} data-datocms-content-link-boundary>
					<h1 className={s.headline}>{headline}</h1>
				</div>
				<div className={s.gallery} data-datocms-content-link-group>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					<FeaturedGallery
						id={id}
						arrowAlign='middle'
						inverted={true}
						theme='dark'
						fadeColor='--black'
						items={isProducts ? (items as ProductRecord[]) : (items as ProjectRecord[])}
					/>
				</div>
			</div>
<<<<<<< HEAD
		</div>
=======
		</section>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	);
}
