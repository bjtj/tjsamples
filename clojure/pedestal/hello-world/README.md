# Hello World #

<http://pedestal.io/guides/hello-world>

```clj
user=> (require :reload 'hello)
nil
user=> (require '[io.pedestal.http.route :as route])
nil
user=> (route/try-routing-for hello/routes :prefix-tree "/greet" :get)
{:path "/greet", :method :get, :path-re #"/\Qgreet\E", :path-parts ["greet"], :interceptors [#Interceptor{:name }], :route-name :greet, :path-params {}, :io.pedestal.http.route.prefix-tree/satisfies-constraints? #object[clojure.core$constantly$fn__6443 0x6182d451 "clojure.core$constantly$fn__6443@6182d451"]}
user=> (route/try-routing-for hello/routes :prefix-tree "/greet" :post)
nil
user=> (route/try-routing-for hello/routes :prefix-tree "/greet" :put)
nil
```

```clj
user=> (require :reload 'hello)
nil
user=> (hello/start)
```
