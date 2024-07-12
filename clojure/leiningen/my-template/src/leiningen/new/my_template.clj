(ns leiningen.new.my-template
  (:require [leiningen.new.templates :as tmpl]
            [leiningen.core.main :as main]))

(def render (tmpl/renderer "my_template"))

(defn my-template
  "FIXME: write documentation"
  [name]
  (let [data {:name name
              :sanitized (tmpl/name-to-path name)}]
    (main/info "Generating fresh 'lein new' my-template project.")
    (tmpl/->files data
                  ["src/{{sanitized}}/foo.clj" (render "foo.clj" data)])))
