(ns blog.core)

;; https://blog.cleancoder.com/uncle-bob/2019/08/22/WhyClojure.html

(defn square [x] (* x x))

(defn -main [& args]
  (println (take 25 (map #(* % %) (range))))
  (println (take 25 (map square (range))))
  )
