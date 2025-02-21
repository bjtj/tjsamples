package example

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.Http
import akka.actor.ActorSystem
import akka.stream.ActorMaterializer

object SimpleServer {
  def main(args: Array[String]): Unit = {
    implicit val system = ActorSystem("my-system")
    implicit val materializer = ActorMaterializer()
    implicit val executionContext = system.dispatcher

    val route = path("hello") {
      get {
        complete("Hello, Akka HTTP!")
      }
    }

    val bindingFuture = Http().bindAndHandle(route, "localhost", 8080)
    println("Server online at http://localhost:8080/\nWait 10 seconds...")
    Thread.sleep(10 * 1000)
    bindingFuture.flatMap(_.unbind()).onComplete(_ => system.terminate())
  }
}
