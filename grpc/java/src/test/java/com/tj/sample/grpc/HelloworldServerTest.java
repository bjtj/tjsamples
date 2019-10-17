package com.tj.sample.grpc;

import com.tj.sample.grpc.HelloworldServer.GreeterImpl;
import static org.junit.Assert.assertEquals;
import io.grpc.inprocess.InProcessChannelBuilder;
import io.grpc.inprocess.InProcessServerBuilder;
import io.grpc.testing.GrpcCleanupRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;


@RunWith(JUnit4.class)
public class HelloworldServerTest {

    @Rule
    public final GrpcCleanupRule grpcCleanup = new GrpcCleanupRule();

    @Test
    public void GreeterImpl_replyMessage() throws Exception {
	String serverName = InProcessServerBuilder.generateName();

	grpcCleanup.register(InProcessServerBuilder
			     .forName(serverName).directExecutor().addService(new GreeterImpl())
			     .build().start());

	GreeterGrpc.GreeterBlockingStub blockingStub = GreeterGrpc.newBlockingStub(
	    grpcCleanup.register(InProcessChannelBuilder
				 .forName(serverName)
				 .directExecutor()
				 .build()));

	HelloReply reply =
	    blockingStub.sayHello(HelloRequest.newBuilder().setName("test name").build());

	assertEquals("Hello test name", reply.getMessage());
    }
}
