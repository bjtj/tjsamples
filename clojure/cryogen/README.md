## Getting Started ##

<http://cryogenweb.org/docs/getting-started.html>

```shell
# Leiningen:
~ $ lein new cryogen my-blog
~ $ cd my-blog

# start continuous build that watches for changes
~/my-blog $ lein serve

# build for deployment
~ $ lein run

# Clojure CLI:
~ $ clojure -X:new :template cryogen :name me.my-blog
~ $ cd me.my-blog

# start continuous build that watches for changes
~/my-blog $ clojure -X:serve

# build for deployment
~ $ clojure -M:build
```
