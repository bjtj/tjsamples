(ns guestbook.messages
  (:require [guestbook.db.core :as db]
            [guestbook.validation :refer [validate-message]]))

(defn message-list
  ""
  []
  {:messages (vec (db/get-messages))})

(defn save-message!
  ""
  [{:keys [login]} message]
  (if-let [errors (validate-message message)]
    (throw (ex-info "Message is invalid"
                    {:guestbook/error-id :validation
                     :errors errors}))
    (db/save-message! (assoc message :author login))))


(defn messages-by-author
  ""
  [author]
  {:messages (vec (db/get-messages-by-author {:author author}))})
