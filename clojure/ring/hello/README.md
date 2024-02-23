# Getting Started - hello

<https://github.com/ring-clojure/ring/wiki/Getting-Started>

## Usage

``` shell
lein repl
```

``` clojure
=> (use 'ring.adapter.jetty)
=> (use 'hello.core)
=> (run-jetty handler {:port 3000
                       :join? false})
```
