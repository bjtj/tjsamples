// we create an express instance
// and we pull in the the function to create an gRPC client we defined before
const server = require('express')();
const createClient = require('../client');

// well.. this is on our localmachine
// hence we know for sure where what location this process has.
// in production you'd want to come up w/ something more flexible
const serviceDefinition = {
    name: 'databaseService',
    ipv4: '127.0.0.1',
    port: 3000
};

// just a example response that our db could return
const exampleResponse = {
    entries: [{
	name: 'what',
	value: 'ever you like'
    },
	      {
		  name: 'what',
		  value: 'ever you like'
	      }]
};

// first start the server and
// then register at the discovery service
server
    .get('/db', (_, res) => {
	res.send(exampleResponse);
    })
    .listen(serviceDefinition.port, () => console.log(`DB service listens on ${serviceDefinition.port}`));

(async () => {
    const client = await createClient();
    const response = await client.register(serviceDefinition);
})();
