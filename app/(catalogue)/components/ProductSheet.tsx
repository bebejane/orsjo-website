'use client';

import s from './ProductSheet.module.scss';
import cn from 'classnames';
import { CurrencyRate, formatPrice } from '@/catalogue/lib/utils';
import Page from './Page';
import { Markdown } from 'next-dato-utils/components';
import { useDictionary } from '@/app/(catalogue)/lib/context/dictionary';
import React from 'react';

const ReactDOMServer = await import('react-dom/server');

type ProductSheetProps = {
	product: AllProductsQuery['allProducts'][number];
	locale: SiteLocale;
	pageNo?: number;
	withPrice?: boolean;
	currency: CurrencyRate;
};

export default function ProductSheet({
	product,
	locale,
	pageNo,
	withPrice = false,
	currency,
}: ProductSheetProps) {
	const t = useDictionary('Catalogue');

	const maxArticlePriceRows = 13;
	const articlePriceSmallStyleCount = 26;

	const specificationsRows = parseSpecifications(product, t);
	const articlePriceRows = parseArticlePrices(product, locale, currency, t, withPrice);
	const articlePriceRowCount = ReactDOMServer.renderToString(articlePriceRows).split('<tr>').length;
	const isArticlePriceSeparatePage = articlePriceRowCount > maxArticlePriceRows;
	const drawings = product.models
		.map((m) => ({ drawing: m.drawing, name: m.name?.name }))
		.filter((d) => d.drawing);

	return (
		<>
			<a id={product.slug}></a>
			<Page>
				<div className={cn(s.frontPage)}>
					<a href='#home' className={s.logo}>
						Ö
					</a>
					<div className={s.intro}>
						<div className={s.productImage}>
							{product.environmentImage && (
								<img src={`${product.environmentImage?.url}?w=1200&fm=jpg`} />
							)}
						</div>
						<div className={s.productText}>
							<h1 className={s.title}>{product.title}</h1>
							<Markdown
								truncate={400}
								className={s.description}
								content={product.description ?? ''}
							/>
						</div>
					</div>
					<div className={s.colors}>
						{product.colorImages.map(({ url, title }, idx) => {
							const isLast = idx === product.colorImages.length - 1;
							const maxWidth = 100 / product.colorImages.length;
							const margin = 10;

							return (
								<div
									key={idx}
									className={s.color}
									style={{
										maxWidth: `calc(${maxWidth}% ${!isLast ? `- ${margin}px` : ''})`,
										marginRight: !isLast ? `${margin}px` : undefined,
									}}
								>
									<img className={s.colorImage} src={`${url}?w=200&fm=jpg`} />
									<div className={s.description}>
										<span className='small'>{title || 'No description'}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Page>

			<Page>
				<section className={cn(s.specPage)}>
					<h2>{t('specifications')}</h2>
					<table>
						<tbody>{specificationsRows}</tbody>
					</table>
					{!isArticlePriceSeparatePage && (
						<table className={s.priceTable}>
							<tbody>{articlePriceRows}</tbody>
						</table>
					)}
				</section>
			</Page>
			{isArticlePriceSeparatePage && ( // Separate page when too many rows
				<Page>
					<section className={cn(s.specPage)}>
						<table
							className={cn(
								articlePriceRowCount > articlePriceSmallStyleCount && s.small,
								s.priceTable,
							)}
						>
							<tbody>{articlePriceRows}</tbody>
						</table>
					</section>
				</Page>
			)}
			{drawings.length > 0 && (
				<Page>
					<section className={cn(s.page, s.dimensionsPage, drawings.length === 1 && s.one)}>
						<h2>{t('dimmensions')}</h2>
						<div className={s.drawings}>
							{drawings.map((item, idx) => (
								<figure key={idx} className={s.drawing}>
									<img key={idx} src={item.drawing?.url} />
									<span className='small'>{item.name}</span>
								</figure>
							))}
						</div>
						<footer>
							<a href='https://www.orsjo.com/'>{t('moreInfo')}</a>
						</footer>
					</section>
				</Page>
			)}
		</>
	);
}

const parseSpecifications = (product: AllProductsQuery['allProducts'][number], t: any) => {
	type LightsourcePick = { id: string; amount?: number; name: string; included: boolean };

	let allLightsources: (LightsourceRecord & { modelName: string })[] = [];
	product.models
		.map((m) => m.lightsources.map((l) => ({ ...l, modelName: m.name?.name })))
		.forEach((l) => allLightsources.push.apply(allLightsources, l));

	let lightsources: (LightsourcePick & { modelName: string })[] = allLightsources
		.filter((obj, index, arr) => arr.map((mapObj) => mapObj.id).indexOf(obj.id) === index)
		.map(({ amount, included, lightsource, modelName }) => ({
			included,
			amount: amount || 1,
			name: lightsource.name,
			id: lightsource.id,
			modelName,
		}));

	lightsources = lightsources.filter(
		(obj, index, arr) => arr.map((mapObj) => mapObj.id).indexOf(obj.id) === index,
	);

	const specs = [
		{ key: 'designer', value: product.designer?.name },
		{ key: 'electricalData', value: product.electricalData.map((el) => el.name).join(', ') },
		{ key: 'description', value: product.additionalInformation },
		{ key: 'connection', value: product.connection?.name },
		{ key: 'mounting', value: product.mounting?.name },
		{
			key: 'lightsource',
			value: lightsources
				.map(
					({ amount, included, name, modelName }) =>
						`${
							lightsources.length && product.models.length > 1 && modelName ? `${modelName}: ` : ''
						}${amount} x ${name} ${included ? `(${t('included')})` : ''}`,
				)
				.join(', '),
		},
		{ key: 'socket', value: product.sockets.map((el) => el.name).join(', ') },
		{
			key: 'weight',
			value:
				product.models.length && product.models?.[0].variants?.[0]?.weight
					? `${product.models?.[0].variants?.[0]?.weight} kg`
					: undefined,
		},
		{
			key: 'volume',
			value:
				product.models.length && product.models?.[0].variants?.[0]?.volume
					? `${product.models?.[0].variants?.[0]?.volume} m³`
					: undefined,
		},
		{ key: 'care', value: null },
		{ key: 'recycling', value: null },
		{ key: 'note', value: product.note, linebreaks: true },
	];

	return (
		<>
			<tr>
				<td colSpan={2}>
					<h3>{t('technicalSpec')}</h3>
				</td>
			</tr>
			{specs
				.filter((s) => s.value)
				.map(({ key, value, linebreaks }, idx) => (
					<tr key={idx}>
						<td>{t(key)}</td>
						<td>{linebreaks && value ? <Markdown content={value} /> : value}</td>
					</tr>
				))}
		</>
	);
};

const parseArticlePrices = (
	product: AllProductsQuery['allProducts'][number],
	locale: SiteLocale,
	currency: CurrencyRate,
	t: any,
	withPrice: boolean = true,
) => {
	const rows = (
		<React.Fragment key={product.slug}>
			<tr>
				<td colSpan={3}>
					<h3>{t(withPrice ? 'articleNoPrice' : 'articleNo')}</h3>
				</td>
			</tr>
			{product.models.map((m) => {
				const lightsources = m.lightsources.map((l) => l).filter(({ included }) => !included);
				return m.variants.map((v, idx) => (
					<React.Fragment key={v.id}>
						{product.models.length > 1 && idx == 0 && (
							<tr>
								<td></td>
								<td>{m.name?.name}</td>
								<td></td>
							</tr>
						)}
						<tr key={idx}>
							<td>{v.articleNo}</td>
							<td>
								{[v.material?.name, v.color?.name, v.feature?.name].filter((el) => el).join(', ')}
							</td>
							<td className={cn(!withPrice && s.hide)}>
								{withPrice && formatPrice(v.price, locale, currency)}
							</td>
						</tr>
						{m.variants.length == idx + 1 &&
							lightsources.map(({ amount, lightsource }, idx) => (
								<tr key={idx}>
									<td>{lightsource.articleNo || '---'}</td>
									<td>
										{lightsource.name}{' '}
										<span>
											({t('needs')} {amount})
										</span>
									</td>
									<td className={cn(!withPrice && s.hide)}>
										{withPrice && formatPrice(lightsource.price, locale, currency)}
									</td>
								</tr>
							))}
						{m.variants.length == idx + 1 &&
							m.accessories
								.filter((a) => a.accessory)
								.map(({ accessory }, idx) => (
									<tr key={accessory?.id}>
										<td>{accessory?.articleNo ?? '---'}</td>
										<td>{accessory?.name}</td>
										<td className={cn(!withPrice && s.hide)}>
											{withPrice && formatPrice(accessory?.price, locale, currency)}
										</td>
									</tr>
								))}
						{idx + 1 === m.variants.length && (
							<tr className={s.space}>
								<td></td>
							</tr>
						)}
					</React.Fragment>
				));
			})}
		</React.Fragment>
	);
	return rows;
};
