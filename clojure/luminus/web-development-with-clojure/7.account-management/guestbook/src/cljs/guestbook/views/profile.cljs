(ns guestbook.views.profile
  (:require
   [guestbook.components :refer [text-input textarea-input]]
   [reagent.core :as r]
   [re-frame.core :as rf]
   ))

(rf/reg-sub
 :profile/changes
 (fn [db _]
   (get db :profile/changes)))

(rf/reg-sub
 :profile/changed?
 :<- [:profile/changes]
 (fn [changes _]
   (not (empty? changes))))

(rf/reg-sub
 :profile/field
 :<- [:profile/changes]
 :<- [:auth/user]
 (fn [[changes {:keys [profile]}] [_ k default]]
   (or (get changtes k) (get profile k) default)))

(rf/reg-sub
 :profile/profile
 :<- [:profile/chagnes]
 :<- [:auth/user]
 (fn [[changes {:keys [profile]}] _]
   (merge profile changes)))

(rf/reg-event-db
 :profile/save-change
 (fn [db [_ k v]]
   (upate db :profile/changes
          (if (nil? v)
            #(dissoc % k)
            #(dissoc % k v)))))

(rf/reg-event-fx
 :profile/set-profile
 (fn [_ [_ profile]]
   {:ajax/post {:url "/api/my-account/set-profile"
                :params {:profile profile}
                :success-event [:profile/handle-set-profile profile]}}))

(rf/reg-event-db
 :profile/handle-set-profile
 (fn [db [_ profile]]
   (-> db
       (assoc-in [:auth/user :profile] profile)
       (dissoc :profile/chagnes))))

(def profile-controllers
  [{:start (fn [_] (println "Entering Profile Page"))}]
  [{:stop (fn [_] (println "Leaving Profile Page"))}])

(defn display-name
  ""
  []
  (r/with-let [k :display-name
               value (rf/subscribe [:profile/field k ""])]
    [:div.field
     [:label.label {:for k} "Display Name"
      (when @(rf/subscribe [:profile/field-changed? k])
        " (Changed)")]
     [:div.field.has-addons
      [:div.control.is-expanded
       [text-input {:value value
                    :on-save #(rf/dispatch [:profile/save-change k %])}]]
      [:div.control>button.button.is-danger
       {:disabled (not @(rf/subscribe [:profile/field-changed? k]))
        :on-click #(rf/dispatch [:profile/save-change k nil])} "Reset"]]]))

(defn bio
  ""
  []
  (r/with-let [k :bio
               value (rf/subscribe [:profile/field k ""])]
    [:div.field
     [:label.label {:for k} "Bio"
      (when @(rf/subscribe [:profile/field-changed? k])
        " (Changed)")]
     [:div.control {:style {:margin-bottom "0.5em"}}
      [textarea-input {:value value
                       :on-save #(rf/dispatch [:profile/save-change k %])}]]
     [:div.control>button.button.is-danger
      {:disabled (not @(rf/subscribe [:profile/field-changed? k]))
       :on-click #(rf/dispatch [:profile/save-change k nil])} "Reset"]]))

(defn profile
  ""
  [_]
  (if-let [{:keys [login created_at profile]} @(rf/subscribe [:auth/user])]
    [:div.content
     [:h1 "My Account"
      (str " <@" login ">")]
     [:p (str "Joined: " (.toString created_at))]
     [display-name]
     [bio]
     [:button.button.is-primary
      {:on-click
       #(rf/dispatch [:profile/set-profile
                      @(rf/subscribe [:profile/profile])])
       :disabled (not @(rf/subscribe [:profile/changed?]))}
      "Update Profile"]]
    [:div.content
     [:div {:style {:width "100%"}}
      [:progress.progress.is-dark {:max 100} "30%"]]]))
