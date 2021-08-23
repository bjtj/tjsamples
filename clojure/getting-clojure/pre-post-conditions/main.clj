(defn publish-book
  ""
  [book]
  (when-not (contains? book :title)
    (throw (ex-info "Books must contain :title" {:book book})))
  (print-book book)
  (ship-book book)
    )

(defn publish-book
  ""
  [book]
  {:pre [(:title book)]}
  (print-book book)
  (ship-book book)
  )
