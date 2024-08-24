# nREPL Server #

<https://nrepl.org/nrepl/usage/server.html>

e.g.) deps.edn

``` clojure
{
;; ...
:aliases {:nREPL
          {:extra-deps
            {nrepl/nrepl {:mvn/version "1.3.0"}}}}
}
```

``` shell
$ clj -M:nREPL -m nrepl.cmdline
```

e.g.) deps.edn (middleware)

``` clojure
{
;; ...
:aliases {:nREPL
          {:extra-deps
           {nrepl/nrepl {:mvn/version "1.3.0"}
            cider/piggieback {:mvn/version "0.4.2"}}}}
}
```

``` shell
$ clj -M:nREPL -m nrepl.cmdline --middleware "[cider.piggieback/wrap-cljs-repl]"
```


```
-i/--interactive            Start nREPL and connect to it with the built-in client.
-c/--connect                Connect to a running nREPL with the built-in client.
-C/--color                  Use colors to differentiate values from output in the REPL. Must be combined with --interactive.
-b/--bind ADDR              Bind address, by default "127.0.0.1".
-h/--host ADDR              Host address to connect to when using --connect. Defaults to "127.0.0.1".
-p/--port PORT              Start nREPL on PORT. Defaults to 0 (random port) if not specified.
-s/--socket PATH            Start nREPL on filesystem socket at PATH.
--ack ACK-PORT              Acknowledge the port of this server to another nREPL server running on ACK-PORT.
-n/--handler HANDLER        The nREPL message handler to use for each incoming connection; defaults to the result of `(nrepl.server/default-handler)`. Must be expressed as a namespace-qualified symbol. The underlying var will be automatically `require`d.
-m/--middleware MIDDLEWARE  A sequence of vars (expressed as namespace-qualified symbols), representing middleware you wish to mix in to the nREPL handler. The underlying vars will be automatically `require`d.
-t/--transport TRANSPORT    The transport to use (default `nrepl.transport/bencode`), expressed as a namespace-qualified symbol. The underlying var will be automatically `require`d.
--help                      Show this help message.
```


----

# nREPL Middleware Setup #

<https://docs.cider.mx/cider/basics/middleware_setup.html>

## Using tools.deps ##

<https://docs.cider.mx/cider/basics/middleware_setup.html#using-tools-deps>

e.g.) deps.edn

``` clojure
  :cider-clj {:extra-deps {cider/cider-nrepl {:mvn/version "0.49.0"}}
              :main-opts ["-m" "nrepl.cmdline" "--middleware" "[cider.nrepl/cider-middleware]"]}

  :cider-cljs {:extra-deps {org.clojure/clojurescript {:mvn/version "1.10.339"}
                            cider/cider-nrepl {:mvn/version "0.49.0"}
                            cider/piggieback {:mvn/version "0.5.3"}}
               :main-opts ["-m" "nrepl.cmdline" "--middleware"
                           "[cider.nrepl/cider-middleware,cider.piggieback/wrap-cljs-repl]"]}
```
