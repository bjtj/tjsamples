# Guestbook (Luminus)

## config

copy `dev-config.edn.sample` to `dev-config.edn`

## Database

### Postgresql

Create user and database.

e.g.)

``` sql
CREATE USER guestbook WITH PASSWORD 'password';
CREATE DATABASE guestbook WITH OWNER guestbook;
```

### Migrate

``` shell
$ lein run migrate
```

## Shadow Cljs

``` shell
$ npm install
```

``` shell
$ npx shadow-cljs compile app
```

``` shell
$ npx shadow-cljs watch app
```

## Start Server

``` shell
$ lein run
```

Or,

``` clojure
;; repl
user> (start)
```

Open the browser.

<http://localhost:3000/>

<http://localhost:3000/api/swagger-ui/>

## Stop Server

`Ctrl + c`

Or,

``` clojure
;; repl
user> (stop)
```

## CIDER

`C-c C-x j j`
