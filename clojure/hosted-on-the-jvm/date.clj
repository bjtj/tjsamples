;; https://clojure.org/about/jvm_hosted

(import '[java.time LocalDate])

(defn add-week ^LocalDate [^LocalDate date]
  (.plusDays date 7))


(defn day->str [^LocalDate date]
  (format "%s %s, %s" (.getMonth date) (.getDayOfMonth date) (.getYear date)))

(def future-weeks (iterate add-week (LocalDate/now)))

(map day->str (take 4 future-weeks))
