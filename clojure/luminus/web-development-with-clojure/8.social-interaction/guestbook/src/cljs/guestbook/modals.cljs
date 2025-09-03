(ns guestbook.modals
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
 :app/show-modal
 (fn [db [_ modal-id]]
   (assoc-in db [:app/active-modals modal-id] true)))

(rf/reg-event-db
 :app/hide-modal
 (fn [db [_ modal-id]]
   (update db :app/active-modals dissoc modal-id)))

(rf/reg-sub
 :app/active-modals
 (fn [db _]
   (:app/active-modals db {})))

(rf/reg-sub
 :app/modal-showing?
 :<- [:app/active-modals]
 (fn [modals [_ modal-id]]
   (get modals modal-id false)))

(defn modal-card [opts-or-id title body footer]
  (let [{:keys [id on-close] :as opts} (if (and
                                            (map? opts-or-id)
                                            (contains? opts-or-id :id))
                                         opts-or-id
                                         {:id opts-or-id})
        close-modal! (fn []
                       (when (fn? on-close)
                         (on-close id))
                       (rf/dispatch [:app/hide-modal id]))]
    [:div.modal
     {:class (when @(rf/subscribe [:app/modal-showing? id])
               "is-active")}
     [:div.modal-background
      {:on-click close-modal!}]
     [:div.modal-card
      [:header.modal-card-head
       [:p.modal-card-title title]
       [:button.delete
        {:on-click close-modal!}]]
      [:section.modal-card-body
       body]
      [:footer.modal-card-foot
       footer]]]))

(defn modal-button
  ([id title body footer]
   [modal-button id {:button {:class ["is-primary"]}} title body footer])
  ([id opts title body footer]
   [:div
    [:button.button
     (merge (:button opts)
            {:on-click #(rf/dispatch [:app/show-modal id])})
     title]
    [modal-card id title body footer]]))
