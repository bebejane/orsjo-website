'use client';

import 'swiper/css';
import s from './FeaturedStart.module.scss';
import cn from 'classnames';
import { FeaturedGallery } from '@/components';
import { usePage } from '@/lib/context/page';

export type ImageGalleryProps = { data: FeaturedRecord; fadeColor?: number[] };

export default function FeaturedStart({ data: { headline, items, id } }: ImageGalleryProps) {
	const { menu } = usePage();
	const isProducts = items[0].__typename === 'ProductRecord';

	return (
		<div className={cn(s.featuredStart, s[menu])}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<h1 className={s.headline}>{headline}</h1>
				</div>
				<div className={s.gallery}>
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
		</div>
	);
}
