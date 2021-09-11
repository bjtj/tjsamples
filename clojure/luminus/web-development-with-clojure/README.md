# Web Development with Clojure #

```shell
lein new luminus guestbook --template-version 3.91 -- +h2 +http-kit
```

```shell
cd guestbook/
lein repl
```

```clojure
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


```clojure
user=> (create-migration "guestbook")
Execution error (IllegalArgumentException) at user/create-migration (user.clj:61).
find not supported on type: mount.core.NotStartedState

user=> (start)
2021-09-11 22:56:19,407 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  guestbook.env - 
-=[guestbook started successfully using the development profile]=- 
2021-09-11 22:56:19,603 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  luminus.http-server - starting HTTP server on port 3000 
{:started ["#'guestbook.config/env" "#'guestbook.db.core/*db*" "#'guestbook.handler/init-app" "#'guestbook.handler/app-routes" "#'guestbook.core/http-server"]}
user=> (create-migration "guestbook")
nil
```


```clojure
user=> (migrate)
2021-09-11 23:00:24,487 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  migratus.core - Starting migrations 
2021-09-11 23:00:24,501 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  migratus.database - creating migration table 'schema_migrations' 
2021-09-11 23:00:24,530 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] DEBUG migratus.migrations - Looking for migrations in #object[java.io.File 0x51e90c58 ...\tjsamples\clojure\luminus\web-development-with-clojure\guestbook\resources\migrations] 
2021-09-11 23:00:24,533 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  migratus.core - Running up for [20210911135626] 
2021-09-11 23:00:24,533 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  migratus.core - Up 20210911135626-guestbook 
2021-09-11 23:00:24,541 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] DEBUG migratus.migration.sql - found 1 up migrations 
2021-09-11 23:00:24,550 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] DEBUG migratus.database - marking 20210911135626 complete 
2021-09-11 23:00:24,561 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  migratus.core - Ending migrations 
nil
```


```cljoure
user=> (restart)
2021-09-11 23:02:10,056 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  luminus.http-server - HTTP server stopped 
2021-09-11 23:02:10,056 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  guestbook.env - 
-=[guestbook has shut down successfully]=- 
2021-09-11 23:02:10,078 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  guestbook.env - 
-=[guestbook started successfully using the development profile]=- 
2021-09-11 23:02:10,266 [nREPL-session-1b260956-9a69-411f-974c-8c029fe7e489] INFO  luminus.http-server - starting HTTP server on port 3000 
{:started ["#'guestbook.config/env" "#'guestbook.db.core/*db*" "#'guestbook.handler/init-app" "#'guestbook.handler/app-routes" "#'guestbook.core/http-server"]}
```

```clojure
user=> (in-ns 'guestbook.db.core)
#object[clojure.lang.Namespace 0x3b8dea88 "guestbook.db.core"]
guestbook.db.core=> 
```

```clojure
guestbook.db.core=> (conman/bind-connection *db* "sql/queries.sql")
{:snips {}, :fns {:save-message! {:meta {:doc "creates a new message using the name and message keys", :command :!, :result :n, :file "sql/queries.sql", :line 1, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__13164$fn__13165 0x63a74938 "conman.core$try_query$fn__13164$fn__13165@63a74938"]}, :get-messages {:meta {:doc "selects all available messages", :command :?, :result :*, :file "sql/queries.sql", :line 6, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__13164$fn__13165 0x1d44bfec "conman.core$try_query$fn__13164$fn__13165@1d44bfec"]}}}
```

```clojure
guestbook.db.core=> (get-messages)
[]
guestbook.db.core=> (save-message! {:name "Bob" :message "Hello, World"})
1
guestbook.db.core=> (get-messages)
[{:id 1, :name "Bob", :message "Hello, World", :timestamp #object[java.time.LocalDateTime 0x5f42da56 "2021-09-11T23:19:23.334118"]}]
```


```shell
$ lein test

lein test guestbook.db.core-test
2021-09-11 23:29:43,032 [main] INFO  migratus.core - Starting migrations 
2021-09-11 23:29:43,051 [main] INFO  migratus.database - creating migration table 'schema_migrations' 
2021-09-11 23:29:43,088 [main] DEBUG migratus.migrations - Looking for migrations in #object[java.io.File 0x43424634 ...\tjsamples\clojure\luminus\web-development-with-clojure\guestbook\resources\migrations] 
2021-09-11 23:29:43,100 [main] INFO  migratus.core - Running up for [20210911135626] 
2021-09-11 23:29:43,101 [main] INFO  migratus.core - Up 20210911135626-guestbook 
2021-09-11 23:29:43,112 [main] DEBUG migratus.migration.sql - found 1 up migrations 
2021-09-11 23:29:43,121 [main] DEBUG migratus.database - marking 20210911135626 complete 
2021-09-11 23:29:43,136 [main] INFO  migratus.core - Ending migrations 

lein test guestbook.handler-test

Ran 2 tests containing 4 assertions.
0 failures, 0 errors.
```


```shell
$ lein test-refresh
*********************************************
*************** Running tests ***************
:reloading (guestbook.dev-middleware guestbook.config guestbook.db.core guestbook.env guestbook.middleware.formats guestbook.layout guestbook.middleware guestbook.routes.home guestbook.handler guestbook.db.core-test guestbook.nrepl guestbook.core guestbook.handler-test user)

Testing guestbook.db.core-test
2021-09-11 23:31:40,118 [main] INFO  migratus.core - Starting migrations 
2021-09-11 23:31:40,158 [main] DEBUG migratus.migrations - Looking for migrations in #object[java.io.File 0x261a8248 ...\tjsamples\clojure\luminus\web-development-with-clojure\guestbook\resources\migrations] 
2021-09-11 23:31:40,164 [main] INFO  migratus.core - Ending migrations 

Testing guestbook.handler-test

Ran 2 tests containing 4 assertions.
0 failures, 0 errors.

Passed all tests
Finished at 23:31:40.719 (run time: 1.811s)
```


# Bulma #

<https://bulma.io/>

Bulma: the modern CSS framework that just works. 


# struct - validation library for Clojure(Script) #

<http://funcool.github.io/struct/latest/>

A structural validation library for Clojure and ClojureScript.

Highlights:

* No macros: validators are defined using plain data.
* Dependent validators: the ability to access to already validated data.
* Coercion: the ability to coerce incoming values to other types.
* No exceptions: no exceptions used in the validation process.

