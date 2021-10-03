

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

## re-frame-10x ##

<https://github.com/day8/re-frame-10x>

### Event Handler Tracing ###

<https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/EventCodeTracing.md>

```clojure
(reg-event-db 
   :some-id
   (fn-traced [db event]   ;; <-- notice the use of `fn-traced` instead of `fn`
      ... code in here))
```
