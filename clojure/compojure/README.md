# Compojure #

<https://github.com/weavejester/compojure>

Compojure is a small routing library for Ring that allows web applications to be composed of small, independent parts.

e.g.) project.clj

``` clojure
[compojure "1.7.1"]
```

e.g.)

``` clojure
(ns hello-world.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]))

(defroutes app
  (GET "/" [] "<h1>Hello World</h1>")
  (route/not-found "<h1>Page not found</h1>"))
```
