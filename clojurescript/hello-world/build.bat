@echo off

java -cp "cljs.jar;src" cljs.main --optimizations advanced -c hello-world.core
