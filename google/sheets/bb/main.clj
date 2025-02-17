#!/usr/bin/env bb

(require '[babashka.http-client :as http]
         '[cheshire.core :as json])

(import '(java.net URLEncoder))

(defn url-encode [s]
  (URLEncoder/encode s "UTF-8"))

(def token (slurp ".token"))

(def sheet-id "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms")
(def range "Class Data!A2:E")

(comment 
  (http/get "http://google.com")

  (let [url (format "https://sheets.googleapis.com/v4/spreadsheets/%s/values/%s"
                    (url-encode sheet-id) (url-encode range))]
    (http/get url {:oauth-token token})))

