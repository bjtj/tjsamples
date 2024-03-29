(ns guestbook.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [re-frame.core :as rf]
            [ajax.core :refer [GET POST]]
            [clojure.string :as string]
            [guestbook.validation :refer [validate-message]]))

(rf/reg-event-fx
 :app/initialize
 (fn [_ _]
   {:db {:messages/loading? true}}))


(dom/render
 [:h1 "Hello, Reagent"]
 (.getElementById js/document "content"))

(dom/render
 [:div {:id "hello", :class "content"} [:h1 "Hello, Auto!"]]
 (.getElementById js/document "content"))

(dom/render
 [:div#hello.content>h1 "Hello, Auto!!"]
 (.getElementById js/document "content"))

;; (defn get-messages
;;   ""
;;   [messages]
;;   (GET "/messages"
;;        {:headers {"Accept" "application/transit+json"}
;;         :handler #(reset! messages (:messages %))}))

(defn message-list
  ""
  [messages]
  (println messages)
  [:ul.messages
   (for [{:keys [timestamp message name]} @messages]
     ^{:key timestamp}
     [:li
      [:time (.toLocaleString timestamp)]
      [:p message]
      [:p " - " name]])])

;; (defn send-message!
;;   "Send Message!"
;;   [fields errors messages]
;;   (if-let [validation-errors (validate-message @fields)]
;;     (reset! errors validation-errors)
;;     (POST "/message"
;;           {:format :json
;;            :headers
;;            {"Accept" "application/transit+json"
;;             "x-csrf-token" (.-value (.getElementById js/document "token"))}
;;            :params @fields
;;            :handler (fn [_]
;;                       (swap! messages conj (assoc @fields
;;                                                   :timestamp (js/Date.)))
;;                       (reset! fields nil)
;;                       (reset! errors nil))
;;            :error-handler (fn [e]
;;                             (.log js/console (str e))
;;                             (reset! errors (-> e :response :errors)))})))

(defn errors-component
  ""
  [errors id]
  (when-let [error (id @errors)]
    [:div.notification.is-danger (string/join error)]))

(defn message-form
  ""
  [messages]
  (let [fields (r/atom {})
        errors (r/atom nil)]
    (fn []
      [:div
       [errors-component errors :server-error]
       [:div.field
        [:label.label {:for :name} "Name"]
        [errors-component errors :name]
        [:input.input
         {:type :text
          :name :name
          :on-change #(swap! fields
                             assoc :name (-> % .-target .-value))
          :value (:name @fields)}]]
       [:div.field
        [:label.label {:for :message} "Message"]
        [errors-component errors :message]
        [:textarea.textarea
         {:name :message
          :value (:message @fields)
          :on-change #(swap! fields
                             assoc :message (-> % .-target .-value))}]]
       [:input.button.is-primary
        {:type :submit
         :on-click #(send-message! fields errors)
         :value "comment"}]])))

(rf/reg-sub
 :messages/loading?
 (fn [db _]
   (:messages/loading? db)))

(rf/reg-event-db
 :messages/set
 (fn [db [_ messages]]
   (-> db
       (assoc :messages/loading? false
              :messages/list messages))))

(rf/reg-sub
 :messages/list
 (fn [db _]
   (:messages/list db)))

(defn get-messages
  ""
  []
  (GET "/messages"
       {:headers {"Accept" "application/transit+json"}
        :handler #(rf/dispatch [:messages/set (:messages %)])}))

(rf/reg-event-db
 :message/add
 (fn [db [_ message]]
   (update db :messages/list conj message)))

(defn send-message!
  "Send Message!"
  [fields errors]
  (if-let [validation-errors (validate-message @fields)]
    (reset! errors validation-errors)
    (POST "/message"
          {:format :json
           :headers
           {"Accept" "application/transit+json"
            "x-csrf-token" (.-value (.getElementById js/document "token"))}
           :params @fields
           :handler (fn [_]
                      (rf/dispatch
                       [:message/add (assoc @fields :timestamp (js/Date.))])
                      (reset! fields nil)
                      (reset! errors nil))
           :error-handler (fn [e]
                            (.log js/console (str e))
                            (reset! errors (-> e :response :errors)))})))

(defn home
  ""
  []
  (let [messages (rf/subscribe [:messages/list])]
    (rf/dispatch [:app/initialize])
    (get-messages)
    (fn []
      (if @(rf/subscribe [:messages/loading?])
        [:div/div.row>div.span12>h3
         "Loading Messages..."]
        [:div.content>div.columns.is-centered>div.colums.is-two-thirds
         [:div.columns>div.column
          [:h3 "Messages"]
          [message-list messages]]
         [:div.columnsL>div.column 
          [message-form messages]]]))))

(dom/render
 [home]
 (.getElementById js/document "content"))

