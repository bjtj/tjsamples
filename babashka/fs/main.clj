#!/usr/bin/env bb

(require '[babashka.fs :as fs])

(fs/cwd)

(fs/home)

(spit "hello.txt" "Hello World")

(fs/list-dir ".")

(fs/copy "hello.txt" "hello2.txt")

(fs/delete "hello2.txt")

(slurp "hello.txt")

(fs/delete "hello.txt")
