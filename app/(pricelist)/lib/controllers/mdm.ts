import ExcelJS from 'exceljs';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';
import {
	convertPriceWithRate,
	convertPriceWithRatesAndTaxes,
	getCurrencyRateByLocale,
	CurrencyRate,
} from '@/lib/currency';
import { toLanguageLocale } from '@/pricelist/lib/utils';
import { DRAFT_ENVIRONMENT } from '@/app/(pricelist)/lib/controllers/pricelist';

/* ------------------------------------------------------------------ */
/* MDM export (articles_update.xlsx format)                            */
/* ------------------------------------------------------------------ */

const MDM_HEADERS = [
	'Varumärke',
	'Leverantör',
	'Leverantörens artikelnr',
	'EAN',
	'Produktnamn',
	'Produkttyp',
	'Säljs endast i pack (ja/nej)',
	'Basfärg (ex röd, blå)',
	'Beskrivning',
	'Kod för tillverkningsland (t ex SE)',
	'Produktlängd (cm)',
	'Produktbredd (cm)',
	'Produkthöjd (cm)',
	'Produktdjup (cm)',
	'Produktens diameter (cm)',
	'Serienamn',
	'Partistorlek',
	'Ledtid',
	'Prislista 2025 SEK exkl moms',
	'Valutakod',
	'Utpris inkl. moms (SEK)',
	'URL till frilagd produktbild',
	'Material/materialspec. för produkt ',
	'Designer',
	'Sockel',
	'Ljuskälla ingår',
	'Är ljuskällan utbytbar? (om ljuskälla ingår)',
	'Eprel-länk',
	'Dimbar ljuskälla ingår',
	'Typ av ljuskälla (om ljuskälla ingår)',
	'Lampskärm höjd (cm)',
	'Takkopp ingår (om taklampa)',
	'Takkopp färg',
	'Ingår lampupphängning',
	'',
	'Brytare var (på sladden/på armaturen/nej)',
	'Sladdfärg',
	'Sladdlängd (m)',
	'Typ av sladd (textil/plast)',
	'Dimbar (ja/nej)',
	'Dimmer inkl. (ja/nej)',
	'IP klass',
];

// Header fill colors extracted from articles_update.xlsx (per column). `null` = no fill.
const MDM_HEADER_FILL = 'FF000000';
const MDM_HEADER_COLOR = 'FFFFFFFF';
const MDM_COL_WIDTH = 16.3;

type MdmProduct = AllProductsQuery['allProducts'][number];
type MdmModel = MdmProduct['models'][number];
type MdmVariant = MdmModel['variants'][number];

/** DatoCMS boolean → "Ja"/"Nej" (blank when unset) */
function mdmBool(value: boolean | null | undefined): string {
	if (value === true) return 'Ja';
	if (value === false) return 'Nej';
	return '';
}

/** product_dimmable name ("Dimmable"/"Dimmer included"/"Not dimmable") → "Ja"/"Nej" */
function mdmDimmable(value: string | null | undefined): string {
	const v = (value ?? '').trim().toLowerCase();
	if (v.includes('not') || v.includes('nej')) return 'Nej';
	if (v) return 'Ja';
	return '';
}

/** Extract IP class (e.g. "IP20") from electrical data names */
function mdmIpClass(names: (string | null | undefined)[]): string {
	return names.filter(Boolean).join(' ').match(/IP\d+/)?.[0] ?? '';
}

function mdmRow(
	product: MdmProduct,
	model: MdmModel,
	variant: MdmVariant,
	currency: CurrencyRate,
): (string | number | null)[] {
	const masterData = model.masterData ?? null;
	const lightsources = model.lightsources ?? [];
	const anyIncluded = lightsources.some((l) => l.included);
	const includedLightsource =
		lightsources.find((l) => l.included)?.lightsource ??
		lightsources.find((l) => l.lightsource)?.lightsource ??
		null;
	const eprel =
		includedLightsource?.eprel ??
		lightsources.find((l) => l.lightsource?.eprel)?.lightsource?.eprel ??
		null;

	return [
		'Örsjö Belysning', // Varumärke
		'Örsjö Belysning', // Leverantör
		variant.articleNo ?? '', // Leverantörens artikelnr
		variant.ean ?? null, // EAN
		product.title ?? '', // Produktnamn
		product.categories
			.map((c) => c.name)
			.filter(Boolean)
			.join(' · '), // Produkttyp
		'Nej', // Säljs endast i pack
		variant.color?.name ?? null, // Basfärg
		product.description ?? '', // Beskrivning
		'SE', // Kod för tillverkningsland
		masterData?.length ?? null, // Produktlängd
		masterData?.width ?? null, // Produktbredd
		masterData?.height ?? null, // Produkthöjd
		masterData?.depth ?? null, // Produktdjup
		masterData?.diameter ?? null, // Produktens diameter
		product.family?.name ?? '', // Serienamn
		1, // Partistorlek
		variant.deliveryDays ?? '', // Ledtid
		convertPriceWithRate(variant.price, currency), // Prislista exkl moms
		currency.isoCode, // Valutakod
		convertPriceWithRatesAndTaxes(variant.price, currency), // Utpris inkl. moms
		variant.image?.url ?? product.image?.url ?? '', // URL till frilagd produktbild
		variant.material?.name ?? '', // Material/materialspec
		product.designer?.name ?? '', // Designer
		product.sockets
			.map((s) => s.name)
			.filter(Boolean)
			.join(', '), // Sockel
		anyIncluded ? 'Ja' : 'Nej', // Ljuskälla ingår
		mdmBool(masterData?.lightsourceExchangeable), // Är ljuskällan utbytbar?
		eprel ?? '', // Eprel-länk
		mdmDimmable(product.dimmable?.name), // Dimbar ljuskälla ingår
		includedLightsource?.name ?? masterData?.lightsourceType ?? '', // Typ av ljuskälla
		masterData?.lampshadeHeight ?? null, // Lampskärm höjd
		mdmBool(masterData?.ceilingRoseIncluded), // Takkopp ingår
		masterData?.ceilingRoseColor ?? '', // Takkopp färg
		mdmBool(masterData?.lampshadeIncluded), // Ingår lampupphängning
		'', // (spacer column)
		masterData?.lampSwitch ?? '', // Brytare var
		masterData?.cableColor ?? '', // Sladdfärg
		masterData?.cableLength ?? '', // Sladdlängd
		masterData?.cableType ?? '', // Typ av sladd
		mdmBool(masterData?.dimmable), // Dimbar
		mdmBool(masterData?.dimmerIncluded), // Dimmer inkl.
		mdmIpClass(product.electricalData.map((e) => e.name)), // IP klass
	];
}

async function mdmWorkbook(rows: (string | number | null)[][]): Promise<Buffer> {
	const wb = new ExcelJS.Workbook();
	const ws = wb.addWorksheet('Artiklar', {
		views: [{ state: 'frozen', ySplit: 3 }],
		properties: { defaultColWidth: MDM_COL_WIDTH },
	});

	// Column widths
	for (let c = 0; c < MDM_HEADERS.length; c++) {
		ws.getColumn(c + 1).width = MDM_COL_WIDTH;
	}

	// Row 1 & 2 empty, row 3 = header, data from row 4 (matches articles_update.xlsx)
	const headerRow = ws.getRow(1);
	MDM_HEADERS.forEach((header, index) => {
		const cell = headerRow.getCell(index + 1);
		cell.value = header;
		cell.font = {
			bold: true,
			size: 13,
			color: { argb: MDM_HEADER_COLOR },
		};
		cell.alignment = { horizontal: 'left', vertical: 'middle', wrapText: false };
		cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: MDM_HEADER_FILL } };
	});

	// Data rows
	const firstDataRow = ws.rowCount + 1;
	for (const row of rows) ws.addRow(row);

	// EAN lives in column 4 — format as a number without decimals so long
	// EANs aren't displayed in scientific notation.
	for (let r = 0; r < rows.length; r++) {
		const eanCell = ws.getCell(firstDataRow + r, 4);
		if (typeof eanCell.value === 'number') eanCell.numFmt = '0';
	}

	return Buffer.from(await wb.xlsx.writeBuffer());
}

/**
 * Export all product variants in the MDM / articles_update.xlsx layout.
 * Prices are converted to the currency of `locale` (excl. and incl. VAT).
 */
export async function generate(
	locale: SiteLocale,
	environment = DRAFT_ENVIRONMENT,
): Promise<{ buffer: Buffer; filename: string }> {
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		environment,
		revalidate: 0,
		variables: { locale: toLanguageLocale(locale) },
	});

	const currency = await getCurrencyRateByLocale(locale);
	if (!currency) throw new Error(`Currency not found: ${locale}`);

	const rows: (string | number | null)[][] = [];
	for (const product of allProducts)
		for (const model of product.models)
			for (const variant of model.variants) rows.push(mdmRow(product, model, variant, currency));

	if (!rows.length) throw new Error('No variants found');

	const date = new Date().toISOString().slice(0, 10);
	const filename = `Master data (${currency.isoCode}) - ${date}.xlsx`;
	return { buffer: await mdmWorkbook(rows), filename };
}
