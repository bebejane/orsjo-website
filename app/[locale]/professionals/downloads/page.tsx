import s from './page.module.scss';
import {
	AllProductDownloadsDocument,
	AllCataloguesDocument,
	DownloadsStartDocument,
} from '@/graphql';
import { Image } from 'react-datocms';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { Section, Icon } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import DownloadsList from './DownloadsList';
import { Metadata } from 'next';

export default async function Downloads({
	params,
}: PageProps<'/[locale]/professionals/downloads'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const [
		{ downloadsStart, draftUrl },
		{ allProducts, draftUrl: productsDraftUrl },
		{ allCatalogues, draftUrl: cataloguesDraftUrl },
	] = await Promise.all([
		apiQuery(DownloadsStartDocument),
		apiQuery(AllProductDownloadsDocument, {
			all: true,
		}),
		apiQuery(AllCataloguesDocument, {
			all: true,
		}),
	]);
	const draftUrls: (string | null)[] = [draftUrl, productsDraftUrl, cataloguesDraftUrl].filter(
		Boolean,
	);

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
			<DraftMode url={draftUrls} path='/professionals/downloads' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Downloads',
	};
}
