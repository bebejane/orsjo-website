export type Pricelist = {
	label: string;
	path: string;
	vat?: boolean;
	format: 'pdf' | 'csv';
};

export const pricelists: Pricelist[] = [
	{
		label: 'Full',
		path: 'full',
		format: 'pdf',
	},
	{
		label: 'Light',
		path: 'light',
		format: 'pdf',
	},
	{
		label: 'Light (inc. vat)',
		path: 'light-with-tax',
		vat: true,
		format: 'pdf',
	},
	{
		label: 'Inc. lightsource',
		path: 'with-lightsource',
		format: 'pdf',
	},
	{
		label: 'Without prices',
		path: 'noprice',
		format: 'pdf',
	},
	{
		label: 'CSV',
		path: 'standard',
		format: 'csv',
	},
	{
		label: 'CSV (incl. vat)',
		path: 'withvat',
		vat: true,
		format: 'csv',
	},
];
