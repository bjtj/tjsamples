
var PROTO_PATH = `${__dirname}/../protos/helloworld.proto`;

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(PROTO_PATH);
var hello_proto = grpc.loadPackageDefinition(packageDefinition);


function sayHello(call, callback) {
    callback(null, {message: 'Hello ' + call.request.name});
}


(() => {
    var server = new grpc.Server();
    server.addService(hello_proto.Greeter.service, {
	sayHello: sayHello
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
})();
