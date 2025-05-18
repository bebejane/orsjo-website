'use client';

import s from './ProductShop.module.scss';
import cn from 'classnames';
import { Block, Section, TextReveal } from '@/components';
import React from 'react';
import { ProductPageDataProps } from './page';
import AddToCartButton from '@/components/shopify/AddToCartButton';
import Price from '@/components/shopify/Price';
import { formatPrice } from '@/lib/shopify/utils';

type Props = {
	product: ProductPageDataProps['product'];
	shopifyProduct: ProductPageDataProps['shopifyProduct'];
};

export default function ProductShop({ product, shopifyProduct }: Props) {
	if (!product) return null;

	return (
		<>
			<Section name='Shop' className={s.shop}>
				<h3>Models</h3>
				{product.models.map(({ id, name, variants, accessories, lightsources }) => (
					<div key={id}>
						<strong>{name?.name}</strong>
						{variants.map(({ id, articleNo, color, material, weight, feature, image, price }) => {
							const shopifyVariant = shopifyProduct?.variants.edges.find(
								(v) => v.node.sku === articleNo
							)?.node;

							return (
								<ul key={id}>
									<li>
										<div>
											{[color?.name, material?.name].filter(Boolean).join(', ')}
											<br />
											<span className={s.articleNo}>{articleNo}</span>
											<ul>{}</ul>
										</div>
										<div>{formatPrice(shopifyVariant?.price.amount)}</div>
										<div>
											<AddToCartButton
												label='Add to cart'
												merchandiseId={shopifyVariant?.id}
												quantity={1}
												disabled={
													!(shopifyVariant?.availableForSale && shopifyVariant?.quantityAvailable)
												}
											/>
										</div>
									</li>
								</ul>
							);
						})}

						{accessories.length > 0 && <h3>Accessories</h3>}
						{accessories.map(({ id, articleNo, price, accessory }) => {
							const shopifyVariant = shopifyProduct?.variants.edges.find(
								(v) => v.node.sku === articleNo
							)?.node;

							return (
								<ul key={id}>
									<li>
										<div>
											{accessory?.name}
											<br />
											<span className={s.articleNo}>{articleNo}</span>
										</div>
										<div>{formatPrice(shopifyVariant?.price.amount)}</div>
										<div>
											<AddToCartButton
												label='Add to cart'
												merchandiseId={id}
												quantity={1}
												disabled={
													!(shopifyVariant?.availableForSale && shopifyVariant?.quantityAvailable)
												}
											/>
										</div>
									</li>
								</ul>
							);
						})}
						{lightsources.length > 0 && <h3>Lightsources</h3>}
						{lightsources.map(({ id, lightsource, amount, included, optional }) => {
							const shopifyVariant = shopifyProduct?.variants.edges.find(
								(v) => v.node.sku === lightsource?.articleNo
							)?.node;

							return (
								<ul key={id}>
									<li>
										<div>
											{lightsource?.name}
											<br />
											<span className={s.articleNo}>{lightsource.articleNo}</span>
										</div>
										<div>{formatPrice(shopifyVariant?.price.amount)}</div>
										<div>
											<AddToCartButton
												label='Add to cart'
												merchandiseId={id}
												quantity={1}
												disabled={
													!(shopifyVariant?.availableForSale && shopifyVariant?.quantityAvailable)
												}
											/>
										</div>
									</li>
								</ul>
							);
						})}
					</div>
				))}
			</Section>
		</>
	);
}
