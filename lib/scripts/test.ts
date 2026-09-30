import 'dotenv/config';

async function main(): Promise<void> {}

if (process.env.SKIP !== '1') {
	main().catch((err) => {
		console.error(err);
		err.errors && console.log(JSON.stringify(err.errors, null, 2));
		process.exitCode = 1;
	});
}
