(ns guestbook.websockets
  (:require-macros [mount.core :refer [defstate]])
  (:require [re-frame.core :as rf]
            [taoensso.sente :as sente]
            mount.core))

(defstate socket
  :start (sente/make-channel-socket!
          "/ws"
          (.-value (.getElementById js/document "token"))
          {:type :auto
           :wrap-recv-evs? false}))

(defn send!
  ""
  [& args]
  (if-let [send-fn (:send-fn @socket)]
    (apply send-fn args)
    (throw (ex-info "Couldn't send message, channel isn't open!"
                    {:message (first args)}))))

(rf/reg-fx
 :ws/send!
 (fn [{:keys [message timeout callback-event]
       :or {timeout 30000}}]
      (if callback-event
        (send! message timeout #(rf/dispatch (conj callback-event %)))
        (send! message))))

(defmulti handle-message
  (fn [{:keys [id]} _]
    id))

(defmethod handle-message :message/add
  [_ msg-add-event]
  (rf/dispatch msg-add-event))

(defmethod handle-message :message/creation-errors
  [_ [_ response]]
  (rf/dispatch
   [:form/set-server-errors (:errors response)]))

;; ------------------------
;; Default Handlers
(defmethod handle-message :chsk/handshake
  [{:keys [event]} _]
  (.log js/console "Connection Established: " (pr-str event)))
(defmethod handle-message :chsk/state
  [{:keys [event]} _]
  (.log js/console "State Changed: " (pr-str event)))
(defmethod handle-message :default
  [{:keys [event]} _]
  (.warn js/console "Unknown websocket message: " (pr-str event)))

;; ------------------------
;; Router
(defn receive-message!
  ""
  [{:keys [id event] :as ws-message}]
  (do
    (.log js/console "EventReceived: " (pr-str event))
    (handle-message ws-message event)))
(defstate channel-router
  :start (sente/start-chsk-router!
          (:ch-recv @socket)
          #'receive-message!)
  :stop (when-let [stop-fn @channel-router]
          (stop-fn)))
