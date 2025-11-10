import s from './Featured.module.scss';
import cn from 'classnames';
import { usePage } from '@/lib/context/page-provider';
import { FeaturedGallery } from '@/components';

export type FeaturedProps = { data: FeaturedRecord };

export default function Featured({ data: { headline, items: products, id } }: FeaturedProps) {
	const { inverted } = usePage();

	return (
		<div className={cn(s.featured, inverted && s.inverted)}>
			<FeaturedGallery items={products as ProductRecord[]} headline={headline} id={id} theme='dark' />
		</div>
	);
}
