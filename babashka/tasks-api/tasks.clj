(ns tasks
  {:org.babashka/cli {:exec-args {:ns-data 1}}})

(defn my-function
  {:org.babashka/cli {:exec-args {:fn-data 1}
                      :coerce {:num [:int]}
                      :alias {:n :num}}}
  [m] m)

