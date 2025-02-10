#!/usr/bin/env bb

(require '[pod.babashka.go-sqlite3 :as sqlite]
         '[cheshire.core :as json])

(def db "foo.db")

(sqlite/query db ["SELECT '안녕?'"])

(sqlite/execute!
 db
 ["CREATE TABLE employee (id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(64),
age INT,
created DATETIME)"])

(sqlite/execute! db ["INSERT INTO employee (name, age, created) VALUES (?, ?, datetime('now'))"
                     "Steve" 24])

(let [results (sqlite/query db ["SELECT * FROM employee"])]
  (prn :employees results))
