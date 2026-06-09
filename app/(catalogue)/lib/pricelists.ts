export type Pricelist = {
	label: string;
	path: string;
	cover?: boolean;
};

export const pricelists: Pricelist[] = [
	{
		label: 'Full',
		path: 'full',
		cover: true,
	},
	{
		label: 'Enkel',
		path: 'light',
	},
	{
		label: 'Enkel (inkl. moms)',
		path: 'light-with-tax',
	},
	{
		label: 'Ink. ljuskälla',
		path: 'with-lightsource',
	},
	{
		label: 'Utan priser',
		path: 'noprice',
	},
];
