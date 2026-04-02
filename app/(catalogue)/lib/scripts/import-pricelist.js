require('dotenv').config();
const { execSync } = require('child_process');
const PricelistController = require('../pdf-generator/controllers/pricelist');

const openFileDialog = () => {
	const cmd =
		'osascript -l JavaScript -e \'a=Application.currentApplication();a.includeStandardAdditions=true;a.chooseFile({withPrompt:"Please select a file to process:"}).toString()\'';

	const res = execSync(cmd, { encoding: 'utf8' });
	return res.split('\n')[0];
};

const importFile = async (file) => {
	if (!file || !file.endsWith('.xlsx')) throw new Error('Invalid file type');
	const test = process.argv?.[2] === '--test';
	const controller = new PricelistController();
	await controller.importFile(file, test);
};

const file = openFileDialog();
importFile(file);
