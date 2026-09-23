'use client';

import s from './PricelistAdmin.module.scss';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { Section, Spinner, FieldError } from 'datocms-react-ui';
import { pricelists } from '@/pricelist/lib/pricelists';
import { ZipPricelists } from './components/ZipPricelists';
import DownloadPricelist from './components/DownloadPricelist';
import PricelistImport from './components/PricelistImport';
import { ProductUpdate } from '@/pricelist/lib/controllers/pricelist';
import { getAdminData, parsePricelist, updatePricelist, uploadPricelist } from './actions';

type AdminData = Awaited<ReturnType<typeof getAdminData>>;

export function PricelistAdmin({ accessToken }: { accessToken?: string }) {
	const [data, setData] = useState<AdminData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

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
			<Section title='Pricelist'>
				<Spinner placement='centered' />
			</Section>
		);
	}

	if (error || !data) {
		return (
			<Section title='Pricelist'>
				<FieldError>{error ?? 'No data'}</FieldError>
			</Section>
		);
	}

	const { locales, currencies, currentPricelist, draftEnvironment } = data;
	const environment = draftEnvironment?.id ?? 'dev';
	const sortedCurrencies = [...currencies].sort((a, b) => a.isoCode.localeCompare(b.isoCode));

	return (
		<div className={s.container}>
			<div className={s.column}>
				<Section title='Update pricelist'>
					<PricelistImport
						key={currentPricelist?.filename}
						upload={(buffer, filename) => uploadPricelist(token, buffer, filename)}
						parse={(buffer, filename) => parsePricelist(token, buffer, filename)}
						update={(updates: ProductUpdate) => updatePricelist(token, updates)}
						current={currentPricelist}
						refresh={load}
					/>
				</Section>
			</div>
			<div className={cn(s.column, s.downloads)}>
				<Section title='Download pricelists'>
					<div className={s.downloadList}>
						{pricelists.map(({ path, label, format }) => (
							<div key={path}>
								<h3 className={s.pricelistTitle}>{label}</h3>
								<ZipPricelists
									title={label}
									paths={locales.map((locale) => ({
										path: `/pricelist/${locale}/${environment}/download/${format}/${path}`,
										filename: `Örsjö Pricelist - ${label} (${currencies.find((c) => c.locale === locale)?.isoCode}).${format}`,
									}))}
								/>
								<div className={s.currencyLinks}>
									{sortedCurrencies.map(({ isoCode, locale }) => (
										<DownloadPricelist
											key={isoCode}
											href={`/pricelist/${locale}/${environment}/download/${format}/${path}`}
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
									path: `/pricelist/${locale}/${environment}/download/mdm`,
									filename: `Master data (${currencies.find((c) => c.locale === locale)?.isoCode}).xlsx`,
								}))}
							/>
							<div className={s.currencyLinks}>
								{sortedCurrencies.map(({ isoCode, locale }) => (
									<DownloadPricelist
										key={isoCode}
										href={`/pricelist/${locale}/${environment}/download/mdm`}
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
