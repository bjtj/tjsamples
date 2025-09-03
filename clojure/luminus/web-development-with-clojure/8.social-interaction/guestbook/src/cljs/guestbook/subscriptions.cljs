(ns guestbook.subscriptions
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :subscription/set
 (fn [{:keys [db]} [_ subs-type sub subscribe?]]
   (let [profile (update-in
                  (get-in db [:auth/user :profile])
                  [:subscriptions subs-type]
                  (fnil
                   (if subscribe?
                     #(conj % sub)
                     (partial filterv (partial not= sub)))
                   []))]
     {:db (assoc db ::loading? true)
      :ajax/post
      {:url "/api/my-account/set-profile"
       :params {:profile profile}
       :success-event [:subscription/handle profile]}})))

(rf/reg-event-db
 :subscription/handle
 (fn [db [_ profile]]
   (-> db
       (assoc-in [:auth/user :profile] profile)
       (dissoc
        ::loading?))))

(rf/reg-sub
 :subscription/subscribed?
 :<-[:auth/user]
 (fn [{:keys [profile]} [_ subs-type sub]]
   (boolean
    (some
     (partial = sub)
     (get-in profile [:subscriptions subs-type] [])))))

(rf/reg-sub
 :subscription/loading?
 (fn [db _]
   (::loading? db)))

(defn subscribe-button [subs-type sub]
  (let [subscribed? @(rf/subscribe [:subscription/subscribed? subs-type sub])
        loading? @(rf/subscribe [:subscription/loading?])]
    (case @(rf/subscribe [:auth/user-state])
      :authenticated
      [:button.button.is-primary.is-rounded
       {:class (when subscribed? "is-outlined")
        :on-click #(rf/dispatch
                    [:subscription/set subs-type sub (not subscribed?)])
        :disabled loading?}
       (if subscribed?
         "Unfollow "
         "Follow ")
       (str
        (case subs-type
          :follows "@"
          :tags "#"
          "")
        sub)]
      ;; else
      [:p "Log in to personalize your feed."])))
