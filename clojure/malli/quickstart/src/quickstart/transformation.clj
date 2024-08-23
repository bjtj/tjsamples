(ns quickstart.transformation
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [jsonista.core :as j]
            [clojure.pprint :refer [pprint] :rename {pprint pp}]
            [quickstart.schemas :as schemas]))

(defn transform1
  [opts]
  (pp
   (m/decode int? "42" mt/string-transformer))
  ;; 42
  (pp
   (m/encode int? 42 mt/string-transformer))
  ;; "42"

  (let [decode (m/decoder int? mt/string-transformer)
        encode (m/encoder int? mt/string-transformer)]
    (pp (decode "42"))
    ;; 42
    (pp (encode 42))
    ;; "42"
    ))

(defn coerce1
  [opts]
  (pp (m/coerce :int "42" mt/string-transformer))
  (pp ((m/coercer :int mt/string-transformer) "42"))
  ;; (pp (m/coerce :int "invalid" mt/string-transformer))
  ;; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ;; {:type :malli.core/coercion,
  ;;  :message :malli.core/coercion,
  ;;  :data
  ;;  {:value "invalid",
  ;;   :schema :int,
  ;;   :explain
  ;;   {:schema :int,
  ;;    :value "invalid",
  ;;    :errors ({:path [], :in [], :schema :int, :value "invalid"})}}}
  )

(defn coerce2
  [opts]
  (pp
   (m/decode
    schemas/Address
    {:id "Lillan",
     :tags ["coffee" "artesan" "garden"],
     :address {:street "Ahlmanintie 29"
               :city "Tampere"
               :zip 33100
               :lonlat [61.4858322 23.7854658]}}
    mt/json-transformer))

  (pp
   (m/encode
    schemas/Address
    {:id "Lillan",
     :tags ["coffee" "artesan" "garden"],
     :address {:street "Ahlmanintie 29"
               :city "Tampere"
               :zip 33100
               :lonlat [61.4858322 23.7854658]}}
    (mt/key-transformer {:encode name}))))
