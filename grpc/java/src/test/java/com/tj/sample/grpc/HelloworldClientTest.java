package com.tj.sample.grpc;

import static org.junit.Assert.assertEquals;
import static org.mockito.AdditionalAnswers.delegatesTo;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import io.grpc.ManagedChannel;
import io.grpc.inprocess.InProcessChannelBuilder;
import io.grpc.inprocess.InProcessServerBuilder;
import io.grpc.stub.StreamObserver;
import io.grpc.testing.GrpcCleanupRule;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;


@RunWith(JUnit4.class)
public class HelloworldClientTest {
    @Rule
    public final GrpcCleanupRule grpcCleanup = new GrpcCleanupRule();

    private final GreeterGrpc.GreeterImplBase serviceImpl =
	mock(GreeterGrpc.GreeterImplBase.class, delegatesTo(new GreeterGrpc.GreeterImplBase() {}));
    private HelloworldClient client;

    @Before
    public void setUp() throws Exception {
	String serverName = InProcessServerBuilder.generateName();
	grpcCleanup.register(InProcessServerBuilder
			     .forName(serverName).directExecutor().addService(serviceImpl)
			     .build()
			     .start());

	ManagedChannel channel = grpcCleanup.register(
	    InProcessChannelBuilder.forName(serverName).directExecutor().build());

	client = new HelloworldClient(channel);
    }

    @Test
    public void greet_messageDeliveredToServer() {
	ArgumentCaptor<HelloRequest> requestCaptor = ArgumentCaptor.forClass(HelloRequest.class);

	client.greet("test name");

	verify(serviceImpl)
	    .sayHello(requestCaptor.capture(), ArgumentMatchers.<StreamObserver<HelloReply>>any());
	assertEquals("test name", requestCaptor.getValue().getName());
    }
}

