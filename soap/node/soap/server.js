var soap = require('soap');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var helloService = {
    HelloService: {
	HelloPort: {
	    sayHello: function(args, cb, soapHeader) {
		return {greeting: 'Hello, ' + args.firstName};
	    }
	}
    }
};

var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8');

var server = http.createServer(function(req, res) {
    res.end('404: Not Found: ' + req.url);
});

server.listen(1336);
soap.listen(server, '/hello', helloService, xml);

var app = express();
app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(1337, function() {
    soap.listen(app, '/hello', helloService, xml);
});
