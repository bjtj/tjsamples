// HTTP module
const http = require("http");

// Authentication module.
const auth = require("http-auth");
const basic = auth.basic({
	realm: "Simon Area.",
	file: __dirname + "/users.htpasswd" // gevorg:gpass, Sarah:testpass
});

const digest = auth.digest({
	realm: "Simon Area.",
	file: __dirname + "/users.htdigest" // vivi:anna
});

// Creating new HTTP server.
// let server = http.createServer(
// 	basic.check((req, res) => {
// 		res.end(`Welcome to private area - ${req.user}!`);
// 	})
// )

let server = http.createServer((req, res) => {

	if (req.url.startsWith('/basic')) {
		basic.check((req, res) => {
			res.end(`BASIC -- Welcome to private area - ${req.user}!`);
		})(req, res)
	} else if (req.url.startsWith('/digest')) {
		digest.check((req, res) => {
			res.end(`DIGEST -- Welcome to private area - ${req.user}!`);
		})(req, res)
	} else {
		res.statusCode = 404;
        res.end('404: Not Found');
	}
})

server.listen(1337, () => {
	// Log URL.
	console.log("Server running at http://127.0.0.1:1337/");
});
