# ring-example/ring-example

<https://github.com/weavejester/ring-oauth2>

deps.edn

``` clojure
ring-oauth2/ring-oauth2 {:mvn/version "0.3.0"}
```


## 400 "No authorization code" on callback, even though I can see code in URL string #43 ##

<https://github.com/weavejester/ring-oauth2/issues/43>

> Oops, it turns out that I place the middle-wares in wrong order, adjusting it to the below order fixes it:

``` clojure
(-> app-routes
    wrap-print-request
    (wrap-oauth2 profiles)
    (wrap-defaults (assoc-in site-defaults [:session :cookie-attrs :same-site] :lax))
    wrap-params)
```
