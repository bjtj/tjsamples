package com.tj.sample.grpc;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;
import java.io.IOException;
import java.util.logging.Logger;


public class HelloworldServer {
    
    private static final Logger logger = Logger.getLogger(HelloworldServer.class.getName());

    private Server server;

    private void start() throws IOException {
	int port = 50051;
	server = ServerBuilder.forPort(port)
	    .addService(new GreeterImpl())
	    .build()
	    .start();
	logger.info("Server started, listening on " + port);
	Runtime.getRuntime().addShutdownHook(new Thread() {
		@Override
		public void run() {
		    System.err.println("*** shutting down gRPC server since JVM is shutting down");
		    HelloworldServer.this.stop();
		    System.err.println("*** server shut down");
		}
	    });
    }

    private void stop() {
	if (server != null) {
	    server.shutdown();
	}
    }

    private void blockUntillShutdown() throws InterruptedException {
	if (server != null) {
	    server.awaitTermination();
	}
    }

    public static void main(String[] args) throws IOException, InterruptedException {
	final HelloworldServer server = new HelloworldServer();
	server.start();
	server.blockUntillShutdown();
    }

    static class GreeterImpl extends GreeterGrpc.GreeterImplBase {
	@Override
	public void sayHello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {
	    HelloReply reply = HelloReply.newBuilder().setMessage("Hello " + req.getName()).build();
	    responseObserver.onNext(reply);
	    responseObserver.onCompleted();
	}
    }
}

