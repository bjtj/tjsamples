# hello with deps.edn #

## Setup Project ##

``` shell
neil new app hello-deps
cd hello-deps
neil dep add ring/ring-core
neil dep add ring/ring-jetty-adapter
neil dep add metosin/reitit-ring
```

## Usage ##

nREPL:

``` shell
clj -M:dev
```
