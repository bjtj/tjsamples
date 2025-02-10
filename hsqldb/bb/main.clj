#!/usr/bin/env bb

(require '[pod.babashka.hsqldb :as db])

(def db "jdbc:hsqldb:mem:testdb;sql.syntax_mys=true")
(db/execute! db ["select '안녕?' as foo"])

