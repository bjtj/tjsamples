# Web Development with Clojure #

```
lein new luminus guestbook --template-version 3.91 -- +h2 +http-kit
```

```
cd guestbook/
lein repl
```

```
nREPL server started on port 55498 on host 127.0.0.1 - nrepl://127.0.0.1:55498
REPL-y 0.4.4, nREPL 0.8.3
Clojure 1.10.1
Java HotSpot(TM) 64-Bit Server VM 16.0.2+7-67
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
 Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
 Results: Stored in vars *1, *2, *3, an exception in *e

user=> (start)
2021-09-11 22:45:34,220 [nREPL-session-32874429-f0e6-427d-8182-04adcce584b4] INFO  guestbook.env - 
-=[guestbook started successfully using the development profile]=- 
2021-09-11 22:45:34,654 [nREPL-session-32874429-f0e6-427d-8182-04adcce584b4] INFO  luminus.http-server - starting HTTP server on port 3000 
{:started ["#'guestbook.config/env" "#'guestbook.db.core/*db*" "#'guestbook.handler/init-app" "#'guestbook.handler/app-routes" "#'guestbook.core/http-server"]}
```

open <http://localhost:3000>
