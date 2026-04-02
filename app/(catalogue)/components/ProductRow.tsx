'use client';

import s from './ProductRow.module.scss';
import cn from 'classnames';
import { CurrencyRate, formatPrice, priceIncLight } from '@/catalogue/lib/utils';
import React from 'react';
import { useDictionary } from '@/app/(catalogue)/lib/context/dictionary';

type ProductRowProps = {
	product: AllProductsQuery['allProducts'][number];
	withLightsource: boolean;
	locale: SiteLocale;
	currency: CurrencyRate;
};

export default function ProductRow({
	product,
	withLightsource,
	locale,
	currency,
}: ProductRowProps) {
	const t = useDictionary('Catalogue');
	const drawings = product.models
		.map((m) => ({ drawing: m.drawing, name: m.name }))
		.filter((d) => d.drawing);

	const rows = product.models.map((m, idxm) => {
		const lightsources = m.lightsources.filter(({ included }) => !included);
		return m.variants.map((v, idx) => {
			const isProductHeader = idxm === 0 && idx === 0;
			return (
				<React.Fragment key={`cat-${idx}-${idxm}`}>
					{isProductHeader && (
						<tr key={`cat-${idx}-${idxm}`}>
							<td>
								<img src={`${product.image?.url}?w=200&fm=jpg`} />
							</td>
							<td className={s.title}>
								<strong>
									{product.title}
									<br />
									{product.categories.map((category) => category.name).join(', ')}
								</strong>
							</td>
							<td></td>
						</tr>
					)}
					{product.models.length > 1 && idx == 0 && (
						<tr key={`name-${idx}-${idxm}`}>
							<td></td>
							<td className={s.name}>{m.name?.name}</td>
							<td></td>
						</tr>
					)}
					<tr key={`price-${idx}-${idxm}`}>
						<td>{v.articleNo}</td>
						<td>
							{[v.color?.name, v.material?.name, v.feature?.name].filter((el) => el).join(', ')}
						</td>
						<td>
							{withLightsource
								? priceIncLight(v.price, lightsources as LightsourceRecord[], locale, currency)
								: formatPrice(v.price, locale, currency)}
						</td>
					</tr>
					{m.variants.length === idx + 1 &&
						lightsources
							.filter(({ optional }) => !withLightsource || !optional)
							.map(({ amount, lightsource }, idxl) => (
								<tr key={`light-${idx}-${idxl}-${idxm}`}>
									<td>{lightsource.articleNo || '---'}</td>
									<td>
										{lightsource.name} ({t('needs')} {amount})
									</td>
									<td>
										{withLightsource
											? 'Inkluderad'
											: formatPrice(lightsource.price, locale, currency)}
									</td>
								</tr>
							))}
					{m.variants.length === idx + 1 &&
						m.accessories
							.filter((a) => a.accessory)
							.map(({ accessory }, idxv) => (
								<tr key={`acc-${idx}-${idxv}-${idxm}`}>
									<td>{accessory?.articleNo || '---'}</td>
									<td>{accessory?.name}</td>
									<td>{formatPrice(accessory?.price, locale, currency)}</td>
								</tr>
							))}
					{idx + 1 === m.variants.length && (
						<tr key={`space-${idx}-${idxm}`} className={s.space}>
							<td></td>
						</tr>
					)}
				</React.Fragment>
			);
		});
	});

	return (
		<section className={cn(s.table)}>
			<table>
				<tbody>{rows}</tbody>
			</table>
		</section>
	);
}
