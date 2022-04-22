// https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

(async function() {
    const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World');
	});

	let ret = await server.listen(port, hostname);

	console.log(`ret: ${JSON.stringify(ret.address())}`)
})();

