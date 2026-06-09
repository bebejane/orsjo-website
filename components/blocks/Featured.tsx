import s from './Featured.module.scss';
import cn from 'classnames';
import { usePage } from '@/lib/context/page-provider';
import { FeaturedGallery } from '@/components';

export type FeaturedProps = { data: FeaturedRecord };

export default function Featured({ data: { headline, items: products, id } }: FeaturedProps) {
	const { inverted } = usePage();

	return (
		<div className={cn(s.featured, inverted && s.inverted)}>
<<<<<<< HEAD
			<FeaturedGallery items={products as ProductRecord[]} headline={headline} id={id} theme='dark' />
=======
			<FeaturedGallery
				items={products as ProductRecord[]}
				headline={headline}
				id={id}
				theme='dark'
			/>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</div>
	);
}
