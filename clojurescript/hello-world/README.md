# Quick Start #

<https://clojurescript.org/guides/quick-start>

On Windows you will need Java 8 and the [standalone ClojureScript JAR](https://github.com/clojure/clojurescript/releases/download/r1.10.758/cljs.jar).

> !) Alternative (scoop-clojure)
>
> <https://github.com/littleli/scoop-clojure>

```
hello-world        # Our project folder
├─ src             # The CLJS source code for our project
│  └─ hello_world  # Our hello_world namespace folder
│     └─ core.cljs # Our main file
├─ cljs.jar        # (Windows only) The standalone Jar you downloaded earlier
└─ deps.edn        # (macOS/Linux only) A file for listing our dependencies
```

Change your `src/hello_world/core.cljs` source file to look like the following:

```clojurescript
(ns hello-world.core)

(println "Hello world!")

;; ADDED
(defn average [a b]
  (/ (+ a b) 2.0))
```

At the REPL prompt, recompile and reload your namespace by evaluating the following:

```clojurescript
(require '[hello-world.core :as hello] :reload)
(hello/average 20 13)
```

You should see the result `16.5`.


## Dependencies ##

Modify your `deps.edn` file:

```clojurescript
{:deps {org.clojure/clojurescript {:mvn/version "1.10.758"}
        cljsjs/react-dom {:mvn/version "16.2.0-3"}}}
```

Let’s edit our simple program to look like the following so that React is properly required:

```clojurescript
(ns hello-world.core
  (:require react-dom))

(.render js/ReactDOM
  (.createElement js/React "h2" nil "Hello, React!")
  (.getElementById js/document "app"))
```

Let’s build and run:

```shell
clj -M -m cljs.main -c hello-world.core -r
```

When the browser launches you should momentarily see the default page which will then be quickly replaced by a h2 tag containing `Hello React!`.
