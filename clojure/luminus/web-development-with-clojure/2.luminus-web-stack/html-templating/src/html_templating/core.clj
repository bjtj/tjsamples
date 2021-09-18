(ns html-templating.core
  (:require [selmer.parser :as selmer]
            [selmer.filters :as filters]))

;; -------------
;; Using Filters
;; -------------

(filters/add-filter! :empty? empty?)

(selmer/render "{% if filtes|empty? %}no files{% else %}files{% endif %}"
               {:files []})

(filters/add-filter! :foo
                     (fn [x]
                       [:safe (.toUpperCase x)]))

(selmer/render "{{ x|foo }}" {:x "<div>I'm safe</div>"})

;; --------------------
;; Defining Custom Tags
;; --------------------

(selmer/add-tag!
 :image
 (fn [args context-map]
   (str "<img src=" (first args) "/>")))
(selmer/render "{% image \"http://foo.com/logo.jpg\" %}" {})

(selmer/add-tag!
 :uppercase
 (fn [args context-map block]
   (.toUpperCase (get-in block [:uppercase :content])))
 :enduppercase)
(selmer/render
 "{% uppercase %}foo {{ bar }} baz{% enduppercase %}"
 {:bar "injected"})

;; ------------------
;; Creating Templates
;; ------------------

(selmer/render "Hello, {{name}}" {:name "World"})

(selmer/render-file "hello.html" {:name "World"})

;; custom resource path
;; (selmer.parser/set-resource-path! "/var/html/templates/")

(selmer/render-file "hello.html" {:items (range 10)})

(selmer/render "<p>Hello {{user.first}} {{user.last}}</p>"
               {:user {:first "John" :last "Doe"}})


;; (selmer.parser/cache-on!)
;; (selmer.parser/cache-off!)


(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
