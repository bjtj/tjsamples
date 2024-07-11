(ns modernweb.events
  (:require
    [re-frame.core :as rf]
    [ajax.core :as ajax]
    [reitit.frontend.easy :as rfe]
    [reitit.frontend.controllers :as rfc]))

;;dispatchers

(rf/reg-event-db
  :common/navigate
  (fn [db [_ match]]
    (let [old-match (:common/route db)
          new-match (assoc match :controllers
                                 (rfc/apply-controllers (:controllers old-match) match))]
      (assoc db :common/route new-match))))

(rf/reg-fx
  :common/navigate-fx!
  (fn [[k & [params query]]]
    (rfe/push-state k params query)))

(rf/reg-event-fx
  :common/navigate!
  (fn [_ [_ url-key params query]]
    {:common/navigate-fx! [url-key params query]}))

(rf/reg-event-db
  :set-docs
  (fn [db [_ docs]]
    (assoc db :docs docs)))

(rf/reg-event-fx
  :fetch-docs
  (fn [_ _]
    {:http-xhrio {:method          :get
                  :uri             "/docs"
                  :response-format (ajax/raw-response-format)
                  :on-success       [:set-docs]}}))

(rf/reg-event-db
  :set-users
  (fn [db [_ users]]
    (assoc db :users (users "users"))))

(rf/reg-event-fx
  :add-created-user
  (fn [{:keys [db]} [_ callback {:strs [created]}]]
    (when callback (rf/dispatch [callback]))
    {:db (update db :users (fnil conj []) created)}))

(rf/reg-event-fx
  :remove-user
  (fn [{:keys [db]} [_ callback {:strs [deleted]}]]
    (when callback (rf/dispatch [callback]))
    (prn deleted (update db :users (fn [lst id] (remove #(= (% "id") id)) lst) (deleted "id")))
    {:db (update db :users (fn [lst id] (remove #(= (% "id") id) lst)) (deleted "id"))}))

(rf/reg-event-fx
  :fetch-users
  (fn [_ _]
    {:http-xhrio {:method          :get
                  :uri             "/users"
                  :response-format (ajax/json-response-format)
                  :on-success       [:set-users]}}))

(rf/reg-event-fx
  :fetch-create-user
  (fn [_ [_ data callback]]
    {:http-xhrio {:method          :post
                  :uri             "/users"
                  :params          data
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format)
                  :on-success      [:add-created-user callback]}}))

(rf/reg-event-fx
  :fetch-delete-user
  (fn [_ [_ id callback]]
    (prn id)
    {:http-xhrio {:method          :delete
                  :uri             (str "/users/" id)
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format)
                  :on-success      [:remove-user callback]}}))

(rf/reg-event-db
  :common/set-error
  (fn [db [_ error]]
    (assoc db :common/error error)))

(rf/reg-event-fx
  :page/init-home
  (fn [_ _]
    {:dispatch [:fetch-docs]}))

(rf/reg-event-fx
  :page/init-users
  (fn [_ _]
    {:dispatch [:fetch-users]}))

;;subscriptions

(rf/reg-sub
  :common/route
  (fn [db _]
    (-> db :common/route)))

(rf/reg-sub
  :common/page-id
  :<- [:common/route]
  (fn [route _]
    (-> route :data :name)))

(rf/reg-sub
  :common/page
  :<- [:common/route]
  (fn [route _]
    (-> route :data :view)))

(rf/reg-sub
  :docs
  (fn [db _]
    (:docs db)))

(rf/reg-sub
  :users
  (fn [db _]
    (:users db)))

(rf/reg-sub
  :common/error
  (fn [db _]
    (:common/error db)))
