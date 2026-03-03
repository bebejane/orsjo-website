'use client';

import 'swiper/css';
import s from './FeaturedStart.module.scss';
import cn from 'classnames';
import { FeaturedGallery } from '@/components';
import { usePage } from '@/lib/context/page-provider';
import { stripStega, decodeStega } from '@datocms/content-link';

export type ImageGalleryProps = { data: FeaturedRecord; fadeColor?: number[] };

export default function FeaturedStart({ data }: ImageGalleryProps) {
	const { inverted } = usePage();
	const { headline, items, id } = data;
	const isProducts = items[0].__typename === 'ProductRecord';

	return (
		<div className={cn(s.featuredStart, inverted && s.inverted)}>
			<div className={s.wrapper} data-datocms-content-link-group>
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
