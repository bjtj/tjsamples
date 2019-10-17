const server = require('express')();
const axios = require('axios');
const createClient = require('../client');

// very same thing as in databaseService.js
const serviceDefinition = {
    name: 'anyService',
    ipv4: '127.0.0.1',
    port: 3001
};
// create a new map to store the locations we care about
const serviceLocations = new Map();

// first start the server and
// then register at the discovery service
// then fetch the database service and store it!
server
    .get('/', async  (_, res) => {
	const dbService = serviceLocations.get('databaseService');
	const response = await axios.get(`http://${dbService.ipv4}:${dbService.port}/db`);
	res.send(response.data);
    })
    .listen(serviceDefinition.port, () => console.log(`AnyService listens on port ${serviceDefinition.port}`));

(async () => {
    const client = await createClient();
    await client.register(serviceDefinition);

    const { registrations: [dbService] } = await client.fetchServiceLocation({
	registrations: [{
	    name: 'databaseService'
	}]
    });

    serviceLocations.set('databaseService', dbService);
})();
