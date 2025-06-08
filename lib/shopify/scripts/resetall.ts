import 'dotenv/config';
import { resetAll } from '../sync';

(async () => {
	console.time('resetall');
	console.log('reseting all...');
	await resetAll();
	console.timeEnd('resetall');
})();
