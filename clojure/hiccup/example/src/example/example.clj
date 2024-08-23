(ns example.example
  (:gen-class)
  (:require [clojure.string :as str]
            [hiccup2.core :as h]
            [hiccup.form :as f]
            [clojure.pprint :refer [pprint] :rename {pprint pp}]))

(defmacro snippet
  ""
  [code]
  `(do 
    (println "code:")
    (pp '~code)
    (println "render:")
    (println (str (h/html ~code)))
    (println)))

(defmacro snippet*
  ""
  [& codes]
  `(do 
    (println "code:")
    (println (str/join " " (map str '~codes)))
    (println "render:")
    (println (str (h/html ~@codes)))
    (println)))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (snippet [:span {:class "foo"} "bar"])
  (snippet [:ul (for [x (range 1 4)]
                   [:li x])])
  (snippet [:p "Tags in HTML are written with <>"])
  (snippet* (h/raw "<!DOCTYPE html>") [:html {:lang "en"}])
  (snippet (f/form-to [:post ""]
                      [:fieldset.mds-border {:style "padding-top: 20px"}])))
