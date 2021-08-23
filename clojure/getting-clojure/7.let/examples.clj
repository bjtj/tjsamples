(defn compute-discount-amount
  ""
  [amount discount-percent min-charge]
  (if (> (* amount (- 1.0 discount-percent)) min-charge)
    (* amount (- 1.0 discount-percent))
    min-charge
      )
)

;; Don't do this!
(defn compute-discount-amount
  ""
  [amount discount-percent min-charge]
  (def discounted-amount (* amount (- 1.0 discount-percent))) ;NOOOO!
  (if (> discounted-amount min-charge)
    discounted-amount
      min-charge))


;; A nasty side effect is brewing here.
(def discounted-amount "Some random string.")

(compute-discount-amount 10.0 0.20 1.0)

discounted-amount                        ;Is now 8.00

;; Do use let!

(defn compute-discount-amount
  ""
  [amount discount-percent min-charge]
  (let [discounted-amount (* amount (- 1.0 discount-percent))]
    (if (> discounted-amount min-charge)
      discounted-amount
        min-charge
        )
    )
)

(defn compute-discount-amount
  ""
  [amount discount-percent min-charge]
  (let [discount (* amount discount-percent)
        discounted-amount (- amount discount)]
    (if (> discounted-amount min-charge)
      discounted-amount
        min-charge
        )
    )
  )

(defn compute-discount-amount
  ""
  [amount discount-percent min-charge]
  (let [discount (* amount discount-percent)
        discounted-amount (- amount discount)]
    (println "Discount:" discount)
    (println "Discounted amount" discounted-amount)
    (if (> discounted-amount min-charge)
      discounted-amount
      min-charge
        )
    )
)

;; -----------
;; Let Over Fn
;; -----------

(def user-discounts
  {"Nicholas" 0.10 "Jonathan" 0.07 "Felicia" 0.05})

(defn compute-discount-amount
  ""
  [amount user-name user-discounts min-charge]
  (let [discount-percent (user-discounts user-name)
        discount (* amount discount-percent)
        discounted-amount (- amount discount)]
    (if (> discounted-amount min-charge)
      discounted-amount
      min-charge
        )
    )
)

(defn mk-discount-price-f
  ""
  [user-name user-discounts min-charge]
  (let [discount-percent (user-discounts user-name)]
        (fn [amount]
          (let [discount (* amount discount-percent)
                discounted-amount (- amount discount)]
            (if (> discounted-amount min-charge)
              discounted-amount
              min-charge)))))

;; Get a price function for Felicia
(def compute-felicia-price (mk-discount-price-f "Felicia" user-discounts 10.0))

;; ...and sometime later compute a price

(compute-felicia-price 20.0)


;; -----------------------
;; Variations on the Theme
;; -----------------------

(def anonymous-book
  {:title "Sir Gawain and the Green Knight"})

(def with-author
  {:title "Once the Future King" :author "White"})

(defn uppercase-author
  ""
  [book]
  (let [author (:author book)]
    (if author
        (.toUpperCase author))
        )
)

(defn uppercase-author
  ""
  [book]
  (if-let [author (:author book)]
    (.toUpperCase author))
    )


(defn uppercase-author
  ""
  [book]
  (if-let [author (:author book)]
    (.toUpperCase author)
    "ANONYMOUS"
    )
)

(defn uppercase-author
  ""
  [book]
  (when-let [author (:author book)]
    (.toUpperCase author)
    )
  )


;; -----------
;; In the Wild
;; -----------

;; (defn parse-params
;;   ""
;;   [params encoding]
;;   (let [params (codec/form-decode params encoding)]
;;     (if (map? params) params {})
;;         )
;;     )

(defn assoc-query-params
  "Parse and assoc parameters from the query string with the request."
  [request encoding]
  (merge-with merge request
              (if-let [query-string (:query-string request)]
                (let [params (parse-params query-string encoding)]
                  {:query-params params, :params params})
                {:query-params {}, :params {}}
                  )
                )
)

;; (let [opts (if options (apply assoc {} options) {})
;;       data (or (:data opts) $data)
;;       _x (data-as-list x data)
;;       nbins (or (:nbins opts) 10)
;;   theme (or (:theme opts) :default)
;;   density? (true? (:density opts))
;;   title (or (:title opts) "")
;;   x-lab (or :y-label opts)
;;   y-labl (or (:y-label opts)
;;              (if density? "Density" "Frequency"))
;;   series-lab (or (:series-label opts) (str 'x))
;;   legend? (true? (:legend opts))
;;   dataset (HistogramDatset.)]
;; ;; Do something heroic with x-labl and density?
;; ;; and title and ...
;; )


