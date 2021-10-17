# 7. Account Management #

Migrate database with specific id

## 20211010035636-alter-posts-add-author-column ##

```shell
$ lein run migrate 20211010035636
```

## 20211017113633-alter-users-add-profile ##

```shell
$ lein run migrate 20211017113633
```


```shell
user=> (start)
2021-10-17 22:30:02,617 [nREPL-session-a0b16818-fcf7-4aab-bb29-8d4e2c1c0fe1] INFO  guestbook.env - 
-=[guestbook started successfully using the development profile]=- 
2021-10-17 22:30:03,254 [nREPL-session-a0b16818-fcf7-4aab-bb29-8d4e2c1c0fe1] INFO  luminus.http-server - starting HTTP server on port 3000 
{:started ["#'guestbook.config/env" "#'guestbook.db.core/*db*" "#'guestbook.routes.websockets/socket" "#'guestbook.routes.websockets/channel-router" "#'guestbook.handler/init-app" "#'guestbook.handler/routes" "#'guestbook.core/http-server"]}
user=> (in-ns 'guestbook.db.core)
#object[clojure.lang.Namespace 0x3cb2e0d5 "guestbook.db.core"]
guestbook.db.core=> (conman/bind-connection *db* "sql/queries.sql")
{:snips {}, :fns {:save-message! {:meta {:doc "creates a new message using the name and message keys", :command :<!, :result :n, :file "sql/queries.sql", :line 1, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x3ac38942 "conman.core$try_query$fn__21466$fn__21467@3ac38942"]}, :get-messages {:meta {:doc "select all available messages", :command :?, :result :*, :file "sql/queries.sql", :line 7, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x4297cc11 "conman.core$try_query$fn__21466$fn__21467@4297cc11"]}, :create-user!* {:meta {:doc "creates a new user with the provided login and hashed password", :command :!, :result :n, :file "sql/queries.sql", :line 11, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x4b31b6be "conman.core$try_query$fn__21466$fn__21467@4b31b6be"]}, :get-user-for-auth* {:meta {:doc "selects a user for authentication", :command :?, :result :1, :file "sql/queries.sql", :line 16, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x36bc8a6d "conman.core$try_query$fn__21466$fn__21467@36bc8a6d"]}, :get-messages-by-author {:meta {:doc "selects all messages posted by a user", :command :?, :result :*, :file "sql/queries.sql", :line 21, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x10138c61 "conman.core$try_query$fn__21466$fn__21467@10138c61"]}, :set-profile-for-user* {:meta {:doc "sets a profile map for the specified user", :command :<!, :result :1, :file "sql/queries.sql", :line 27, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x6c982d36 "conman.core$try_query$fn__21466$fn__21467@6c982d36"]}, :get-user* {:meta {:doc "gets a user's publicly available information", :command :?, :result :1, :file "sql/queries.sql", :line 34, :arglists ([db] [db params] [db params options & command-options])}, :fn #object[conman.core$try_query$fn__21466$fn__21467 0x2adaf25d "conman.core$try_query$fn__21466$fn__21467@2adaf25d"]}}}
guestbook.db.core=> (get-user* {:login "testuser"})
{:login "testuser", :created_at #inst "2021-10-04T06:44:40.642-00:00", :profile {}}
guestbook.db.core=> (set-profile-for-user* {:login "testuser" :profile {:bio "A test user"}})
{:login "testuser", :password "bcrypt+sha512$02751c8a962679e03d2aea2c2e9e5e4c$12$0156ff0c4e59235f1bc69d46e171d8267cf0a3896a222701", :created_at #inst "2021-10-04T06:44:40.642-00:00", :profile {:bio "A test user"}}
```
