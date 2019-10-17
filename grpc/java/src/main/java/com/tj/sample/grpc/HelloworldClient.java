package com.tj.sample.grpc;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.StatusRuntimeException;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;


public class HelloworldClient {
    private static final Logger logger = Logger.getLogger(HelloworldClient.class.getName());
    private final ManagedChannel channel;
    private final GreeterGrpc.GreeterBlockingStub blockingStub;

    public HelloworldClient(String host, int port) {
	this(ManagedChannelBuilder.forAddress(host, port)
	     .usePlaintext()
	     .build());
    }

    HelloworldClient(ManagedChannel channel) {
	this.channel = channel;
	blockingStub = GreeterGrpc.newBlockingStub(channel);
    }

    public void shutdown() throws InterruptedException {
	channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }

    public void greet(String name) {
	logger.info("Will try to greet " + name + " ...");
	HelloRequest request = HelloRequest.newBuilder().setName(name).build();
	HelloReply response;
	try {
	    response = blockingStub.sayHello(request);
	}
	catch (StatusRuntimeException e) {
	    logger.log(Level.WARNING, "RPC failed: {0}", e.getStatus());
	    return;
	}
	logger.info("Greeting: " + response.getMessage());

    }

    public static void main(String[] args) throws Exception {
	HelloworldClient client = new HelloworldClient("localhost", 50051);
	try {
	    String user = "world";
	    if (args.length > 0) {
		user = args[0];
	    }
	    client.greet(user);
	} finally {
	    client.shutdown();
	}
    }
}
