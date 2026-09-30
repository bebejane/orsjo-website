'use client';

import s from './PricelistAdmin.module.scss';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { Section, Spinner, FieldError, SelectField } from 'datocms-react-ui';
import { DRAFT_ENVIRONMENT, pricelists } from '@/pricelist/lib/pricelists';
import { ZipPricelists } from './components/ZipPricelists';
import DownloadPricelist from './components/DownloadPricelist';
import PricelistImport from './components/PricelistImport';
import type { ProductUpdate, UpdateProgress } from '@/pricelist/lib/controllers/pricelist';
import { getAdminData, parsePricelist, uploadPricelist } from './actions';
import { streamUpdate } from './lib/streamUpdate';
import { RenderPageCtx } from 'datocms-plugin-sdk';

type AdminData = Awaited<ReturnType<typeof getAdminData>>;

export function PricelistAdmin({ accessToken, ctx }: { accessToken?: string; ctx: RenderPageCtx }) {
	const environments = [
		{ label: 'Draft', value: DRAFT_ENVIRONMENT },
		{ label: 'Main', value: 'main' },
	];

	const [data, setData] = useState<AdminData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [environment, setEnvironment] = useState<{ label: string; value: string }>(environments[0]);
	const token = accessToken ?? '';

	const load = useCallback(async () => {
		try {
			setLoading(true);
			setError(null);
			setData(await getAdminData());
		} catch (err) {
			setError(err instanceof Error ? err.message : (err as string));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		load();
	}, [load]);

	if (loading) {
		return (
			<div className={s.loading}>
				<Spinner placement='centered' />
			</div>
		);
	}

	if (error || !data) {
		return (
			<Section title='Pricelist'>
				<FieldError>{error ?? 'No data'}</FieldError>
			</Section>
		);
	}

	const { locales, currencies, currentPricelist } = data;
	const sortedCurrencies = [...currencies].sort((a, b) => a.isoCode.localeCompare(b.isoCode));

	return (
		<div className={s.container}>
			<Section title='Select environment' headerClassName={s.header}>
				<SelectField
					name='environment'
					id='environment'
					label=''
					value={environment}
					selectInputProps={{
						options: environments,
					}}
					onChange={(newValue) => setEnvironment(newValue as { label: string; value: string })}
				/>
			</Section>
			<div className={s.column}>
				<Section title='Update pricelist' headerClassName={s.header}>
					<PricelistImport
						key={currentPricelist?.filename}
						environment={environment}
						ctx={ctx}
						upload={(buffer, filename) => uploadPricelist(token, buffer, filename)}
						parse={(buffer) => parsePricelist(token, buffer, environment.value)}
						update={(
							updates: ProductUpdate,
							onProgress?: (progress: UpdateProgress) => void,
						) => streamUpdate(token, environment.value, updates, onProgress)}
						current={currentPricelist}
						refresh={load}
					/>
				</Section>
			</div>
			<div className={cn(s.column, s.downloads)}>
				<Section
					title={`Download pricelists (${environment.label.toLowerCase()})`}
					headerClassName={s.header}
				>
					<div className={s.downloadList}>
						{pricelists.map(({ path, label, format }) => (
							<div key={path}>
								<h3 className={s.pricelistTitle}>{label}</h3>
								<ZipPricelists
									title={label}
									paths={locales.map((locale) => ({
										path: `/pricelist/${locale}/${environment.value}/download/${format}/${path}`,
										filename: `Örsjö Pricelist - ${label} (${currencies.find((c) => c.locale === locale)?.isoCode}).${format}`,
									}))}
								/>
								<div className={s.currencyLinks}>
									{sortedCurrencies.map(({ isoCode, locale }) => (
										<DownloadPricelist
											key={isoCode}
											href={`/pricelist/${locale}/${environment.value}/download/${format}/${path}`}
											label={isoCode}
											extension={format}
										/>
									))}
								</div>
							</div>
						))}
						<div>
							<h3 className={s.pricelistTitle}>Master data</h3>
							<ZipPricelists
								title='Örsjö Belysning - Master data'
								paths={locales.map((locale) => ({
									path: `/pricelist/${locale}/${environment.value}/download/mdm`,
									filename: `Master data (${currencies.find((c) => c.locale === locale)?.isoCode}).xlsx`,
								}))}
							/>
							<div className={s.currencyLinks}>
								{sortedCurrencies.map(({ isoCode, locale }) => (
									<DownloadPricelist
										key={isoCode}
										href={`/pricelist/${locale}/${environment.value}/download/mdm`}
										label={isoCode}
										extension='xlsx'
									/>
								))}
							</div>
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
}
