'use client';

import 'swiper/css';
import s from './FeaturedStart.module.scss';
import cn from 'classnames';
import { FeaturedGallery } from '@/components';
import { usePage } from '@/lib/context/page-provider';
import { stripStega, decodeStega } from '@datocms/content-link';

export type FeaturedStartProps = { data: FeaturedRecord; fadeColor?: number[] };

export default function FeaturedStart({ data }: FeaturedStartProps) {
	const { inverted } = usePage();
	const { headline, items, id } = stripStega(data);
	const isProducts = items[0].__typename === 'ProductRecord';

	return (
		<div className={cn(s.featuredStart, inverted && s.inverted)}>
			<div className={s.wrapper} data-datocms-content-link-url={data._editingUrl}>
				<div className={s.header} data-datocms-content-link-boundary>
					<h1 className={s.headline}>{headline}</h1>
				</div>
				<div className={s.gallery} data-datocms-content-link-boundary>
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
