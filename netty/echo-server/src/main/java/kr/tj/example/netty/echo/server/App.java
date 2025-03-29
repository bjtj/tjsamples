package kr.tj.example.netty.echo.server;

/**
 * Hello world!
 */
public class App {
   

    public static void main(String[] args) throws Exception {
        new EchoServer(8000).run();
    }
}
