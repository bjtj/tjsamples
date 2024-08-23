(ns quickstart.errors
  (:require [clojure.pprint :refer [pprint] :rename {pprint pp}]
            [malli.core :as m]
            [malli.error :as me]
            [quickstart.schemas :as schemas]))

(defn error1
  [opts]
  (pp
   (-> schemas/Address
       (m/explain
        {:id "Lillan"
         :tags #{:artesan "coffee" :garden}
         :address {:street "Ahlmanintie 29"
                   :zip 33100
                   :lonlat [61.4858322, nil]}})
       (me/humanize))))

(defn error2
  [opts]
  (try
    (m/validate schemas/Address {:not "an address"})
    (catch Exception e
      (pp (-> e ex-data :data :explain me/humanize)))))

(defn custom-error1
  [opts]
  (pp
   (-> [:map
        [:id int?]
        [:size [:enum {:error/message "should be: S|M|L"}
                "S" "M" "L"]]
        [:age [:fn {:error/fn (fn [{:keys [value]} _] (str value ", should be > 18"))}
               (fn [x] (and (int? x) (> x 18)))]]]
       (m/explain {:size "XL", :age 10})
       (me/humanize
        {:errors (-> me/default-errors
                     (assoc ::m/missing-key {:error/fn (fn [{:keys [in]} _] (str "missing key " (last in)))}))}))))

(defn custom-error2
  [opts]
  (pp
   (-> [:map
        [:id int?]
        [:size [:enum {:error/message {:en "should be: S|M|L"
                                       :fi "pitäisi olla: S|M|L"}}
                "S" "M" "L"]]
        [:age [:fn {:error/fn {:en (fn [{:keys [value]} _] (str value ", should be > 18"))
                               :fi (fn [{:keys [value]} _] (str value ", pitäisi olla > 18"))}}
               (fn [x] (and (int? x) (> x 18)))]]]
       (m/explain {:size "XL", :age 10})
       (me/humanize
        {:locale :fi
         :errors (-> me/default-errors
                     (assoc-in ['int? :error-message :fi] "pitäisi olla numero")
                     (assoc ::m/missing-key {:error/fn {:en (fn [{:keys [in]} _] (str "missing key " (last in)))
                                                        :fi (fn [{:keys [in]} _] (str "puuttuu avain " (last in)))}}))}))))
