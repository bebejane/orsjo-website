import s from './page.module.scss';
import {
	AllProductDownloadsDocument,
	AllCataloguesDocument,
	DownloadsStartDocument,
} from '@/graphql';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section, Icon } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import DownloadsList from './DownloadsList';
import { Metadata } from 'next';

export default async function Downloads() {
	const [{ downloadsStart }, { allProducts }, { allCatalogues }] = await Promise.all([
		apiQuery<DownloadsStartQuery, DownloadsStartQueryVariables>(DownloadsStartDocument),
		apiQuery<AllProductDownloadsQuery, AllProductDownloadsQueryVariables>(
			AllProductDownloadsDocument,
			{
				all: true,
			}
		),
		apiQuery<AllCataloguesQuery, AllCataloguesQueryVariables>(AllCataloguesDocument, {
			all: true,
		}),
	]);

	if (!downloadsStart) notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='white topMargin'>{downloadsStart.title}</h1>
				<div className={s.intro}>
					<Markdown content={downloadsStart.intro} />
				</div>
			</Section>
			<DownloadsList products={allProducts} />
			<Section className={s.related} name='Catalogues' bottom={true}>
				<h1 className='white topMargin'>Catalogues</h1>
				<table>
					<tbody>
						<tr>
							<th>
								<span className='small'>Image</span>
							</th>
							<th>
								<span className='small'>Title</span>
							</th>
							<th></th>
						</tr>
						{allCatalogues.map(({ id, title, thumbnail, pdf }) => (
							<tr key={id}>
								<td>
									{thumbnail.responsiveImage && (
										<Image data={thumbnail.responsiveImage} className={s.image} />
									)}
								</td>
								<td>
									<a href={`${pdf.url}?dl=${title}.pdf`} download target='_new'>
										<Icon label={title} />
									</a>
								</td>
								<td></td>
							</tr>
						))}
					</tbody>
				</table>
			</Section>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Downloads',
	};
}
