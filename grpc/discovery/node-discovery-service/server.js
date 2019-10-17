// let's create a variable for the path of the .proto file
const REGISTRY_PROTO_PATH = `${__dirname}/protos/registry.proto`;
// import grpc and the loader
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
// here we actually load the proto content
const packageDefinition = protoLoader.loadSync(REGISTRY_PROTO_PATH);
// and then we create the definition of it
// so that we can go ahead and use it
const { registry: registryProto } = grpc.loadPackageDefinition(packageDefinition);
// we use a Map to store all registered services
const registryStore = new Map();
// to save a bunch of boilerplate code
// we create a "higher order function"
// that takes a function which will define what to do w/ the request
// aka put it into the map, remove it from there, return all entries, etc.
const registryFunction = mapOperatorFn => ({ request }, rpcCallback) => {
    let error;
    let payload;

    try {
	payload = mapOperatorFn(request);
    } catch (e) {
	error = e;
    }
    // call the clients callback
    // btw we rely on the fact that the mapOperatorFn
    // will return the correct payload
    // e.g.: { message } for Registry.register
    rpcCallback(error, payload);
};

// here we simply create the operator function and pass it
// into our registryFunction wrapper
// we set the properties for every given service and identify them by their name
// note: even if there is an entry already we simply override it
// since we assume that the latest registration is always the correct one
const register = registryFunction(({ name, ipv4, port }) => {
    registryStore.set(name, { ipv4, port });

    const message = `${name} was registered under ${ipv4}:${port}`;
    console.log(message);

    return {
	message
    };
});

// this function simply deletes the registration from the map
const unregister = registryFunction(({ name }) => {
    registryStore.delete(name);
    
    const message = `${name} was unregistered`;
    console.log(message);

    return {
	message
    };
});

// this function let's you fetch one or more registered services
// e.g.: if you care about the database-services location
// you'd just send an array of locations you're interested in: ['databaseService']
// BE AWARE that looping through ALL given services in the Map AND then looking
// in the array whether it's what you requested could give you
// a performance hit w/ big datasets.
// Map lookups are very efficient => O(1)
// vs. the looping through that we're doing => O(n) + O(n) = O(n^2)
const fetchServiceLocation = registryFunction(({ registrations: requestedRegistrations = [], fetchAll }) => {
    const reqRegistrationNames = [...requestedRegistrations].map(({ name }) => name);
    const registrations = [];

    for ([name, properties] of registryStore.entries()) {
	if (fetchAll || reqRegistrationNames.includes(name)) {
	    registrations.push({
		name,
		...properties
	    });
	}
    }

    return { registrations };
});

// in this iife we simply start the grpc server and define the services
// to match our .proto definition
(() => {
    const server = new grpc.Server();

    server.addService(registryProto.Registry.service, {
	register,
	unregister,
	fetchServiceLocation
    });

    server.bind('0.0.0.0:3333', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('Discovery Service started at port 3333');
})();
