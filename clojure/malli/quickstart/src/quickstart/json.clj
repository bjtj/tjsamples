(ns quickstart.json
  (:require [malli.core :as m]
            [malli.transform :as mt]
            [clojure.pprint :refer [pprint] :rename {pprint pp}]
            [jsonista.core :as j]))


(defn json1
  [opts]
  (def Tags
    (m/schema [:map
               {:closed true}
               [:tags [:set :keyword]]]))
  (pp
   (jsonista.core/write-value-as-string
    (m/encode Tags
              {:tags #{:bar :quux}}
              mt/json-transformer)))
  ;; => "{\"tags\":[\"bar\",\"quux\"]}"
  (pp
   (m/decode Tags
             (jsonista.core/read-value "{\"tags\": [\"bar\",[\"quux\"]]}"
                                       jsonista.core/keyword-keys-object-mapper)
             mt/json-transformer))
  ;; => {:tags #{:bar ["quux"]}}
  (pp
   (m/explain Tags
              (m/decode Tags
                        (jsonista.core/read-value "{\"tags\":[\"bar\",[\"quux\"]]}"
                                                  jsonista.core/keyword-keys-object-mapper)
                        mt/json-transformer)))
  ;; => {:schema [:map {:closed true} [:tags [:set :keyword]]],
  ;;     :value {:tags #{:bar ["quux"]}},
  ;;     :errors
  ;;     ({:path [:tags 0],
  ;;       :in [:tags ["quux"]],
  ;;       :schema :keyword,
  ;;       :value ["quux"]})}
  (pp
   (m/validate Tags
               (m/decode Tags
                         (jsonista.core/read-value "{\"tags\":[\"bar\",\"quux\"]}"
                                                   jsonista.core/keyword-keys-object-mapper)
                         mt/json-transformer)))
  ;; => true

  ;; For performance, it's best to prebuild the validator, decoder and explainer:
  (def validate-Tags (m/validator Tags))
  (def decode-Tags (m/decoder Tags mt/json-transformer))
  (pp (-> (jsonista.core/read-value "{\"tags\":[\"bar\",\"quux\"]}"
                                    jsonista.core/keyword-keys-object-mapper)
          decode-Tags
          validate-Tags))
  ;; => true
  )
