def helloMessage(names: Seq[String]) = names match
  case Nil =>
    "Hello!"
  case names =>
    names.mkString("Hello: ", ", ", "!")

println(helloMessage(args.toSeq))
