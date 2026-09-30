'use client';

import React from 'react';
import { BuildItemPresentationInfoCtx, connect } from 'datocms-plugin-sdk';
import { createRoot, Root } from 'react-dom/client';
import { useEffect } from 'react';
import { Canvas } from 'datocms-react-ui';
import { ConfigScreen } from './ConfigScreen';
import { PricelistAdmin } from './PricelistAdmin';
import { Product, ProductMdm, ProductVariant } from '@/types/datocms-cma';
import { Item } from '@datocms/cma-client/dist/types/generated/RawApiTypes.js';
import { client } from '@/lib/client';

const isDev = process.env.NODE_ENV === 'development';

type PluginPageProps = {};

function isRecordOf(item: Item, ctx: BuildItemPresentationInfoCtx, apiKey: string): boolean {
	return ctx.itemTypes[item.relationships.item_type.data.id]?.attributes.api_key === apiKey;
}

export function Plugin({}: PluginPageProps) {
	const isIFrame = typeof window !== 'undefined' && window.self !== window.top;
	let rootElement: HTMLElement | null = null;
	let root: Root | null = null;
	const connecting = React.useRef(false);

	function render(component: React.ReactNode) {
		rootElement = rootElement ?? document.getElementById('root');
		if (!rootElement) {
			console.warn('rootElement is null');
			return;
		}
		if (!root) root = createRoot(rootElement as HTMLElement);
		root?.render(<React.StrictMode>{component}</React.StrictMode>);
	}

	useEffect(() => {
		if (connecting.current || !isIFrame) return;
		connecting.current = true;
		console.log('connecting Örsjö plugin...');
		connect({
			renderConfigScreen(ctx) {
				render(<ConfigScreen ctx={ctx} />);
			},
			renderPage(pageId, ctx) {
				switch (pageId) {
					case 'pricelist':
						return render(
							<Canvas ctx={ctx}>
								<PricelistAdmin accessToken={ctx.currentUserAccessToken} />
							</Canvas>,
						);
				}
			},
			contentAreaSidebarItems(ctx) {
				return [
					{
						label: `Pricelist ${isDev ? '(dev)' : ''}`,
						icon: 'list',
						pointsTo: {
							pageId: 'pricelist',
						},
						placement: ['after', 'menuItems'],
					},
				];
			},
			async buildItemPresentationInfo(item, ctx) {
				// if (isRecordOf(item, ctx, 'product')) {
				// 	const { attributes: variant } = item as typeof item & {
				// 		attributes: Item<ProductVariant>['attributes'];
				// 	};

				// 	return {
				// 		title: `${variant.article_no}`,
				// 	};
				// }

				if (isRecordOf(item, ctx, 'product_mdm')) {
					const { attributes: mdm, id } = item as typeof item & {
						attributes: Item<ProductMdm>['attributes'];
					};

					const product = (await client.items.references<Product>(id))?.[0];

					return {
						title: `${product?.title ?? id} (master data)`,
					};
				}

				return;
			},
		})
			.then((res) => {
				console.log('connected Örsjo plugin');
			})
			.catch((err) => {
				console.error('error connecting Örsjö plugin');
				console.error(err);
			})
			.finally(() => {
				connecting.current = false;
			});
	}, []);

	return <div id='root' />;
}
