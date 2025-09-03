(ns guestbook.views.profile
  (:require
   [ajax.core :as ajax]
   [guestbook.components :refer [text-input textarea-input
                                 image image-uploader]]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [reitit.frontend.easy :as rtfe]
   [guestbook.modals :as m]
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
   (or (get changes k) (get profile k) default)))

(rf/reg-sub
 :profile/profile
 :<- [:profile/changes]
 :<- [:auth/user]
 (fn [[changes {:keys [profile]}] _]
   (merge profile changes)))

(rf/reg-event-db
 :profile/save-change
 (fn [db [_ k v]]
   (update db :profile/changes
           (if (nil? v)
             #(dissoc % k)
             #(dissoc % k v)))))

(rf/reg-sub
 :profile/media
 (fn [db _]
   (get db :profile/media)))

(rf/reg-sub
 :profile/changed?
 :<- [:profile/changes]
 :<- [:profile/media]
 (fn [[changes media] _]
   (not
    (and
     (empty? changes)
     (empty? media)))))

(rf/reg-sub
 :profile/field-changed?
 :<- [:profile/changes]
 :<- [:profile/media]
 (fn [[changes media] [_ k]]
   (or
    (contains? changes k)
    (contains? media k))))

(rf/reg-sub
 :profile/field
 :<- [:profile/changes]
 :<- [:auth/user]
 :<- [:profile/media]
 (fn [[changes {:keys [profile]} media] [_ k default]]
   (or
    (when-let [file (get media k)] (js/URL.createObjectURL file))
    (get changes k)
    (get profile k)
    default)))

(rf/reg-event-db
 :profile/save-media
 (fn [db [_ k v]]
   (update db
           :profile/media
           (if (nil? v)
             #(dissoc % k)
             #(assoc % k v)))))

(rf/reg-event-fx
 :profile/set-profile
 (fn [_ [_ profile files]]
   (if (some some? (vals files))
     {:ajax/upload-media!
      {:url "/api/my-account/media/upload"
       :files files
       :handler
       (fn [response]
         (rf/dispatch
          [:profile/set-profile
           (merge profile
                  (select-keys response (:files-uploaded response)))]))}}
     {:ajax/post
      {:url "/api/my-account/set-profile"
       :params {:profile profile}
       :success-event [:profile/handle-set-profile profile]}})))

(rf/reg-event-db
 :profile/handle-set-profile
 (fn [db [_ profile]]
   (-> db
       (assoc-in [:auth/user :profile] profile)
       (dissoc
        :profile/media
        :profile/changes))))

(def profile-controllers
  [{:start (fn [_] (println "Entering Profile Page"))
    :stop (fn [_] (println "Leaving Profile Page"))}])

(defn display-name []
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

(defn bio []
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

(defn avatar []
  (r/with-let [k :avatar
               url (rf/subscribe [:profile/field k ""])]
    [:<>
     [:h3 "Avatar"
      (when @(rf/subscribe [:profile/field-changed? k])
        " (Changed)")]
     [image @url 128 128]
     [:div.field.is-grouped
      [:div.control
       [image-uploader
        #(rf/dispatch [:profile/save-media k %])
        "choose an Avatar..."]]
      [:div.control>button.button.is-danger
       {:disabled (not @(rf/subscribe [:profile/field-changed? k]))
        :on-click #(rf/dispatch [:profile/save-media k nil])}
       "Reset Avatar"]]]))

(defn banner []
  (r/with-let [k :banner
               url (rf/subscribe [:profile/field k ""])]
    [:<>
     [:h3 "Banner"
      (when @(rf/subscribe [:profile/field-changed? k])
        " (Changed)")]
     [image @url 1200 400]
     [:div.field.is-grouped
      [:div.control
       [image-uploader
        #(rf/dispatch [:profile/save-media k %])
        "Choose a Banner..."]]
      [:div.control>button.button.is-danger
       {:disabled (not @(rf/subscribe [:profile/field-changed? k]))
        :on-click #(rf/dispatch [:profile/save-media k nil])}
       "Reset Banner"]]]))

(defn change-password []
  (let [fields (r/atom {})
        errors (r/atom {})
        success (r/atom {})]
    (letfn [(password-field [id label]
              ;; helper component
              (r/with-let [v (r/cursor fields [id])
                           e (r/cursor errors [id])]
                [:div.field
                 [:label.label {:for id} label]
                 [:input.input {:id id
                                :type :password
                                :value @v
                                :on-change #(reset! v (.. % -target -value))}]
                 (when-let [message @e]
                   [:p.help.is-danger message])]))
            (change-password! []
              ;; helper component
              (let [{:keys [new-password
                            confirm-password]
                     :as params} @fields]
                (if (not= new-password confirm-password)
                  (reset! errors
                          {:new-password "New Password and Confirm must match!"
                           :confirm-password "New Password and Confirm must match!"})
                  (ajax/POST "/api/my-account/change-password"
                             {:params params
                              :handler
                              (fn [_]
                                ;; Display success message for 5 seconds
                                (swap! success
                                       (fn [{:keys [timeout]}]
                                         (when timeout
                                           (js/clearTimeout timeout))
                                         {:message "Password change successful!"
                                          :timeout (js/setTimeout
                                                    (fn []
                                                      (reset! success {}))
                                                    5000)}))
                                (reset! fields {})
                                (reset! errors {}))
                              :error-handler
                              (fn [{r :response}]
                                (println r)
                                (reset!
                                 errors
                                 (case (:error r)
                                   :incorrect-password
                                   {:old-password (:message r)}
                                   :mismatch
                                   {:new-password (:message r)
                                    :confirm-password (:message r)}
                                   ;; else
                                   {:server
                                    "Unknown Server Error. Please try again!"})))})))
              )]
      (fn []
        [:<>
         [:h3 "Change Password"]
         [password-field :old-password "Current Password"]
         [password-field :new-password "New Password"]
         [password-field :confirm-password "New Password (confirm)"]
         [:div.field
          (when-let [message (:server @errors)]
            [:p.message.is-danger message])
          (when-let [message (:message @success)]
            [:p.message.is-success message])
          [:button.button
           {:on-click
            (fn [_]
              (change-password!))}
           "Change Password"]]]))))

(defn delete-account [username]
  (r/with-let [fields (r/atom {})
               login (r/cursor fields [:login])
               password (r/cursor fields [:password])
               status (r/atom {})]
    [:<>
     [:h3 "Delete Account"]
     [m/modal-button
      ::delete-account
      {:button {:class ["is-danger"]}}
      "Delete Account"
      ;; Modal Body
      [:section
       [:div.message.is-danger
        [:div.message-header (str "Deleting Account " username)]
        [:div.message-body "Are you sure you wish to delete your account?"]]
       (when-let [message (:error @status)]
         [:div.message.is-dander>div.message-body message])
       [:div.field.is-horizontal
        [:div.field-label.is-normal>label.label {:for :login} "Login"]
        [:div.field-body>input.input
         {:id :login
          :autocomplete false
          :value @login
          :on-change #(reset! login (.. % -target -value))
          :disabled (:loading @status)
          :type :text}]]
       [:div.field.is-horizontal
        [:div.field-label.is-noraml>label.label {:for :password} "Password"]
        [:div.field-body>input.input
         {:id :password
          :value @password
          :disabled (:loading @status)
          :on-change #(reset! password (.. % -target -value))
          :type :password
          :autocomplete false}]]]
      ;; Modal Footer
      [:div.field.is-grouped
       [:p.control>button.button.is-light
        {:disabled (:loading @status)
         :on-click (fn [_]
                     (reset! fields {})
                     (reset! status {})
                     (rf/dispatch [:app/hide-modal ::delete-account]))}
        "Cancel"]
       [:p.control>button.button.is-danger
        {:disabled (or (:loading @status) (empty? @login) (empty? @password))
         :on-click
         (fn [_]
           (if (not= @login username)
             (reset! status
                     {:error
                      (str "Login must match current user: " username)})
             (do
               (reset! status {:loading true})
               (ajax/POST "/api/my-account/delete-account"
                          {:params @fields
                           :handler
                           (fn [_]
                             (reset! status {})
                             (reset! fields {})
                             (rf/dispatch [:app/hide-modal ::delete-account])
                             (rf/dispatch [:auth/handle-logout])
                             (rtfe/push-state :guestbook.routes.app/home))
                           :error-handler
                           (fn [{r :response}]
                             (if (= (:error r) :incorrect-password)
                               (reset! status {:error
                                               "Incorrect password, please try again."})
                               (reset! status {:error
                                               "Unknown Error Occured."})))}))))}
        "Delete Account"]]]]))

(defn account-settings []
  [:<>
   [:h2 "Account Settings"]
   [change-password]
   [delete-account (:login @(rf/subscribe [:auth/user]))]])

(defn profile [_]
  (if-let [{:keys [login created_at profile]} @(rf/subscribe [:auth/user])]
    [:div.content
     [:h1 "My Account"
      (str " <@" login ">")]
     [:p (str "Joined: " (.toString created_at))]
     [display-name]
     [bio]
     [avatar]
     [banner]
     (let [disabled? (not @(rf/subscribe [:profile/changed?]))]
       [:button.button.is-primary.is-large
        {:style {:width "100%"
                 :position :sticky
                 :bottom 10
                 :visibility (if disabled?
                               :hidden
                               :visible)}
         :on-click
         #(rf/dispatch [:profile/set-profile
                        @(rf/subscribe [:profile/profile])
                        @(rf/subscribe [:profile/media])])
         :disabled disabled?}
        "Update Profile"])
     [account-settings]]
    [:div.content
     [:div {:style {:width "100%"}}
      [:progress.progress.is-dark {:max 100} "30%"]]]))

