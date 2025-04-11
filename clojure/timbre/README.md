# Timbre #

<https://github.com/taoensso/timbre>

## 1 Getting started ##

<https://github.com/taoensso/timbre/wiki/1-Getting-started>

### Setup ###

<https://clojars.org/com.taoensso/timbre/>

e.g.) Leiningen

``` clojure
[com.taoensso/timbre "6.7.0-alpha1"]
```

e.g.) deps.edn

``` clojure
com.taoensso/timbre {:mvn/version "6.7.0-alpha1"}
```

### Compile-time elision ###

``` shell
#!/bin/bash

# Elide all lower-level logging calls:
export TAOENSSO_TIMBRE_MIN_LEVEL_EDN=':warn'

# Elide all other ns logging calls:
export TAOENSSO_TIMBRE_NS_PATTERN_EDN='{:allow #{"my-app.*"} :deny #{"my-app.foo" "my-app.bar.*"}}'

lein cljsbuild once # Compile js with appropriate logging calls excluded
lein uberjar        # Compile jar ''
```
