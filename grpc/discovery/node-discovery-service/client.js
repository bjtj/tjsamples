const REGISTRY_PROTO_PATH = `${__dirname}/protos/registry.proto`;

// I personally prefer the promise syntax over
// the callback syntax
// nonetheless the functionality won't change at all if you go with callbacks
// but to actually turn the callback signature of those clients function into a promise based one
// we need a utility that is baked into node natively
// promisify
const { promisify } = require('util');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
// we do the very same thing as in server, load and create a definition
const packageDefinition = protoLoader.loadSync(REGISTRY_PROTO_PATH);
const { registry: registryProto } = grpc.loadPackageDefinition(packageDefinition);

// we export a function that'll create a gRPC client
// so that we can import it and use the client.js as a utility w/o duplicating any code
module.exports = async () => {
    // this line connects to the Registry Service on the server at localhost:3333
    const client = new registryProto.Registry('localhost:3333', grpc.credentials.createInsecure());
    // to keep things simple in this example
    // I'd splitted out the functions/properties on our client instance that'll be turned into promises
    // because if we didn't than in the proxy below we would turn every property lookup into a promise
    // which would throw an error if this very property wasn't a callback based function
    const promisableFns = ['register', 'unregister', 'fetchServiceLocation'];

    // I wrapped the client instance in a proxy because...
    // I can.
    // WARNING: though it looks sexy, please be aware that we are creating a new
    // function instance on every property look up when using a proxy like this.
    // "promisify(target[property])" creates a new function every time!
    const clientProxy = new Proxy(client, {
	get: (target, property) => {
	    return promisableFns.includes(property)
		? promisify(target[property])
		: target[property];
	}
    });

    return clientProxy;
};
