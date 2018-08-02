# clojure hello world

* https://coderwall.com/p/yb1k-q/hello-world-in-clojure

e.g.)

```
lein new hello-world
cd hello-world
```

* write `(defn -main [& args] ...`
* edit `project.clj` & `src/hello-world/core.clj`

```
lein run
```

## lein

* https://leiningen.org/


## lein-exec

* https://github.com/kumarshantanu/lein-exec

```
$ lein exec <.clj file>
```

Lein 2

* `~/.lein/profiles.clj`

```
{:user {:plugins [[lein-exec "0.3.7"]]}}
```

Lein 1.x

```
$ lein plugin nistall lein-exec "0.1"
```
