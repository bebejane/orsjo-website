import 'dotenv/config';
import { execSync } from 'child_process';
import fs from 'fs';
import * as pricelistController from '../controllers/pricelist';

async function importFile(filePath: string) {
	console.log('import file:', filePath);
	const file = fs.readFileSync(filePath);
	const articles = await pricelistController.parse(file);
	const updates = await pricelistController.generate(articles);
}

function openFileDialog() {
	const cmd =
		'osascript -l JavaScript -e \'a=Application.currentApplication();a.includeStandardAdditions=true;a.chooseFile({withPrompt:"Please select a file to process:"}).toString()\'';

	const res = execSync(cmd, { encoding: 'utf8' });
	return res.split('\n')[0];
}

importFile(openFileDialog());
