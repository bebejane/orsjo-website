export type Pricelist = {
	label: string;
	path: string;
	vat?: boolean;
};

export const pricelists: Pricelist[] = [
	{
		label: 'Full',
		path: 'full',
	},
	{
		label: 'Light',
		path: 'light',
	},
	{
		label: 'Light (inc. vat)',
		path: 'light-with-tax',
		vat: true,
	},
	{
		label: 'Inc. lightsource',
		path: 'with-lightsource',
	},
	{
		label: 'Without prices',
		path: 'noprice',
	},
];
