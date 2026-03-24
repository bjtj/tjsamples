(ns guestbook.validation
  (:require [struct.core :as st]))

(def message-schema
  [[:message
    st/required
    st/string
    {:message "message must contain at least 10 characters"
     :validate (fn [msg] (>= (count msg) 10))}]])

(defn validate-message [params]
  (first (st/validate params message-schema)))
