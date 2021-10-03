

# shadow-cljs #

```shell
npm install -g shadow-cljs
```

```shell
npm install
```

```shell
npx shadow-cljs watch app
```

```shell
npx shadow-cljs cljs-repl app
```

```clojure
(guestbook.core/init!)
```

# Re-Frame-10x #

Toggle Dashboard

`Ctrl + H`

# The Importance of a Tight Feedback Loop #

## Production Build Profile ##

```shell
lein run -m shadow.cljs.devtools.cli release app
```

```shell
lein shadow-cljs release app
```

```shell
lein clean
lein uberjar
java -jar -Dconf=dev-config.edn target/uberjar/guestbook.jar
```
