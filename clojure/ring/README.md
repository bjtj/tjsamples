# Ring - Getting Started #

* https://github.com/ring-clojure/ring/wiki/Getting-Started


## New project ##

```
$ lein new hello
$ cd hello
```


## Edit `project.clf` ##

```
(defproject hello "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]])
```


## Download dependencies ##

```
$ lein deps
```


## Edit `src/hello/core.clj` ##

```
(ns hello.core)

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})
```


## Run ##

```
$ lein repl
user=> (use 'ring.adapter.jetty)
user=> (use 'hello.core)
user=> (run-jetty handler {:port 3000})
```
