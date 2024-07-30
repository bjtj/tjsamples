(ns sample.core
  (:gen-class)
  (:require [asset-minifier.core :refer [minify-css]]))

(defn greet
  "Callable entry point to the application."
  [data]
  (println (str "Hello, " (or (:name data) "World") "!")))

(defn hello
  ""
  [data]
  (str "Hello, " (or (:name data) "World") "!"))

(defn do-minify
  ""
  [{:keys [src dst]}]
  (minify-css src dst))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (greet {:name (first args)}))
