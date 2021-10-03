(ns guestbook.routes.websockets
  (:require [clojure.tools.logging :as log]
            [org.httpkit.server :as http-kit]
            [clojure.edn :as edn]
            [guestbook.messages :as msg]))

(defonce channels (atom #{}))

(defn connect!
  ""
  [channel]
  (log/info "Channel opened")
  (swap! channels conj channel))

(defn disconnect!
  ""
  [channel status]
  (log/info "Channel closed: " status)
  (swap! channels disj channel))


(defn handle-message!
  ""
  [channel ws-message]
  (let [message (edn/read-string ws-message)
        response (try
                   (msg/save-message! message)
                   (assoc message :timestamp (java.util.Date.))
                   (catch Exception e
                     (let [{id :guestbook/error-id
                            errors :errors} (ex-data e)]
                       (case id
                         :validation
                         {:errors errors}
                         {:errors
                          {:server-error ["Failed to save message!"]}}))))]
    (if (:errors response)
      (http-kit/send! channel (pr-str response))
      (doseq [channel @channels]
        (http-kit/send! channel (pr-str response))))))

(defn handler
  ""
  [request]
  (http-kit/with-channel request channel
    (connect! channel)
    (http-kit/on-close channel (partial disconnect! channel))
    (http-kit/on-receive channel (partial handle-message! channel))))

(defn websocket-routes
  ""
  []
  ["/ws"
   {:get handler}])
