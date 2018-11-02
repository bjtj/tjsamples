var soap = require('soap')
var url = 'http://localhost:1337/hello?wsdl';
var args = {firstName: 'Steve'};
soap.createClient(url, function(err, client) {
    client.sayHello(args, function(err, result) {
	console.log(result);
	console.log(result.greeting);
    });
});
