(def counter 0)

(defn greeting-message
  ""
  [req]
  (if (zero? (mod counter 100))
    (str "Congrats! You are the " counter " visitor!")
    (str "Welcome to Blotts Books!")))

;; ect

(def counter (atom 0))

(defn greeting-message
  ""
  [req]
  (swap! counter inc)
  (if (= @counter 500)
    (str "Congrats! You are the " @counter " visitor!")
    (str "Welcome to Blotts Books!")))

;; ect



