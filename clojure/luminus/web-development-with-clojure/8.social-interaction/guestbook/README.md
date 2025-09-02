# Guestbook #

## How to start ##

### config ###

copy `dev-config.edn.sample` to `dev-config.edn`

### Database ###

#### Postgresql ####

Create user and database.

e.g.)

``` sql
CREATE USER guestbook WITH PASSWORD 'password';
CREATE DATABASE guestbook WITH OWNER guestbook;
```

### Migrate ###

``` shell
lein run migrate
```

### Shadow Cljs ###

``` shell
npm install
npx shadow-cljs watch app
```

### Start Server ###

``` shell
lein run
```

Open the browser.

<http://localhost:3000/>

<http://localhost:3000/api/swagger-ui/>
