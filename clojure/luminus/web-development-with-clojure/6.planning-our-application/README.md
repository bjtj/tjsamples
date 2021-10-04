
# 6. Planning Our Application

dev-config.edn

```clojure
{:dev true
 :port 3000
 ;; when :nrepl-port is set the application starts the nREPL server on load
 :nrepl-port 7000

 :database-url "postgresql://localhost:5432/guestbook?user=guestbook&password=password"}
```

## Posts

guestbook\resources\migrations\20211004053444-create-posts-table.up.sql

```sql
CREATE TABLE posts
(id SERIAL PRIMARY KEY,
name text not null,
message text not null,
timestamp TIMESTAMP not null DEFAULT now());
```

guestbook\resources\migrations\20211004053444-create-posts-table.down.sql

```sql
DROP TABLE posts;
```

```clojure
(->>
    (sql/query
    (jdbc/with-options
    (jdbc/get-datasource
    {:jdbcUrl "jdbc:h2:./guestbook/guestbook_dev.db"})
    {:builder-fn rs/as-unqualified-lower-maps})
    ["select name, message, timestamp from guestbook"])
    (mapv (juxt :name :message :timestamp))
    (sql/insert-multi! *db* :posts
    [:name :message :timestamp]))
```

## Data Modeling

### Users

```sql
CREATE TABLE users
(login text PRIMARY KEY,
password text not null,
created_at TIMESTAMP not null DEFAULT now());
```

```sql
DROP TABLE users;
```
