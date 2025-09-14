(ns hello.core)

(defn hello [{:keys [name]}]
  (prn :Hello name))

(defn -main
  [& [name]]
  (hello {:name name}))
