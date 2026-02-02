(ns tut)

(defn last-path [v]
  (loop [path [] curr v]
    (let [idx (dec (count curr))
          node (nth curr idx)]
      (if (seq (:children node))
        (recur (conj path idx :children) (:children node))
        (conj path idx)))))

(let [data [{:text 1}
            {:text 2}
            {:text 3 :children [{:text 4} {:text 5 :children []}]}]
      data [{:text 1 :children [{:text 4} {:text 5 :children []}]}]
      p (last-path data)]
  (prn :path p)
  (get-in data p))

(defn last-path-to-level [v level]
  (if (= level 0)
    [0]
    (loop [path []
           curr v
           depth level]
      (let [idx (dec (count curr))]
        (when (< idx 0)
          (throw (ex-info "unexpectedly stopped"
                          {:final-path path})))
        (if (> depth 0)
          (recur (conj path idx :children)
                 (:children (nth curr idx))
                 (dec depth))
          path)))))


(try
  (last-path-to-level
   [{:text "1" :children [{:text "2"
                           :children [{:text "3"}]}]}
    {:text "4"}]
   0)
  (catch Exception e (.getMessage e)))

(try
  (last-path-to-level
   [{:text "1" :children [{:text "2"
                           :children [{:text "3"}]}]}
    {:text "4"}]
   1)
  (catch Exception e (.getMessage e)))

(try
  (last-path-to-level
   [{:text "1"}
    {:text "4" :children [{:text "2"
                           :children [{:text "3"}]}]}]
   1)
  (catch Exception e (.getMessage e)))

(try
  (last-path-to-level
   [{:text "1"}
    {:text "4" :children [{:text "2"
                           :children [{:text "3"}]}]}]
   2)
  (catch Exception e (.getMessage e)))
