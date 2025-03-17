@echo off

IF NOT EXIST cljs.jar (
curl -OL "https://github.com/clojure/clojurescript/releases/download/r1.11.132/cljs.jar"
)

java -cp "cljs.jar;src" cljs.main "%*"
