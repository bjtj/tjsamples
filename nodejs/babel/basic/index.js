import '@bable/polyfill';

const name = 'World';

const main = async () => {
	console.log(`Hello ${name}`);
}

main().catch(console.error);
