(ns inventory)

(def by-title (atom {}))

(defn add-book
  ""
  [{title :title :as book}]
  (swap! by-title #(assoc % title book)))

(defn del-book
  ""
  [title]
  (swap! by-title #(dissoc % title)))

(defn find-book
  ""
  [title]
  (get @by-title title))

(find-book "Emma")

(add-book {:title "1984", :copies 1948})
(add-book {:title "Emma", :copies 100})
(del-book "1984")
(find-book "Emma")
(find-book "1984")

