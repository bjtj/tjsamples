(ns guestbook.messages
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [reagent.dom :as dom]
            [reitit.frontend.easy :as rtfe]
            [guestbook.validation :refer [validate-message]]
            [guestbook.components :refer [text-input textarea-input image md image-uploader]]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [guestbook.modals :as modals]))

;; All code is copied in from guestbook.core

(defn add-message? [filter-map msg]
  (every?
   (fn [[k matcher]]
     (let [v (get msg k)]
       (cond
         (set? matcher)
         (matcher v)
         (fn? matcher)
         (matcher v)
         :else
         (= matcher v))))
   filter-map))

;; messages load

(rf/reg-event-fx
 :messages/load
 (fn-traced [{:keys [db]} _]
            {:db (assoc db
                        :messages/loading? true
                        :messages/list nil
                        :messages/filter nil)
             :ajax/get {:url "/api/messages"
                        :success-path [:messages]
                        :success-event [:messages/set]}}))

(rf/reg-event-fx
 :messages/load-feed
 (fn [{:keys [db]} _]
   (let [{:keys [follows tags]}
         (get-in db [:auth/user :profile :subscriptions])]
     {:db (assoc db
                 :messages/loading? true
                 :messages/list nil
                 :messages/filter
                 [{:message
                   #(some
                     (fn [tag]
                       (re-find
                        (re-pattern (str "(?<=\\s|^)#" tag "(?=\\s|$)"))
                        %))
                     tags)}
                  {:poster
                   #(some
                     (partial = %)
                     follows)}])
      :ajax/get {:url "/api/messages/feed"
                 :success-path [:messages]
                 :success-event [:messages/set]}})))


(rf/reg-event-fx
 :messages/load-by-author
 (fn [{:keys [db]} [_ author]]
   {:db (assoc db
               :messages/loading? true
               :messsages/filter {:poster author}
               :messages/list nil)
    :ajax/get {:url (str "/api/messages/by/" author)
               :success-path [:messages]
               :success-event [:messages/set]}}))

(rf/reg-event-fx
 :messages/load-by-tag
 (fn [{:keys [db]} [_ tag]]
   {:db (assoc db
               :messages/loading? true
               :messages/filter
               {:message #(re-find
                           (re-pattern (str "(?<=\\s|^)#" tag "(?=\\s|$)"))
                           %)}
               :messages/list nil)
    :ajax/get {:url (str "/api/messages/tagged/" tag)
               :success-path [:messages]
               :success-event [:messages/set]}}))

(rf/reg-sub
 :messages/loading?
 (fn [db _]
   (:messages/loading? db)))

;; messages

(rf/reg-event-db
 :messages/set
 (fn-traced [db [_ messages]]
            (-> db
                (assoc :messages/loading? false
                       :messages/list messages))))

(rf/reg-sub
 :messages/list
 (fn [db _]
   (:list
    (reduce
     (fn [{:keys [ids list] :as acc} {:keys [id] :as msg}]
       (if (contains? ids id)
         acc
         {:list (conj list msg)
          :ids (conj ids id)}))
     {:list []
      :ids #{}}
     (:messages/list db [])))))


(rf/reg-event-db
 :message/add
 (fn [db [_ message]]
   (let [msg-filter (:messages/filter db)
         filters (if (map? msg-filter)
                   [msg-filter]
                   msg-filter)]
     (if (some #(add-message? % message) filters)
       (update db :messages/list conj message)
       db))))

;; form

(rf/reg-event-db
 :form/set-field
 [(rf/path :form/fields)]
 (fn-traced [fields [_ id value]]
            (assoc fields id value)))

(rf/reg-event-db
 :form/clear-fields
 [(rf/path :form/fields)]
 (fn-traced [_ _]
            {}))

(rf/reg-sub
 :form/fields
 (fn [db _]
   (:form/fields db)))

(rf/reg-sub
 :form/field
 :<- [:form/fields]
 (fn [fields [_ id]]
   (get fields id)))

(rf/reg-event-db
 :form/set-server-errors
 [(rf/path :form/server-errors)]
 (fn-traced [_ [_ errors]]
            errors))

(rf/reg-sub
 :form/server-errors
 (fn [db _]
   (:form/server-errors db)))

(rf/reg-sub
 :form/validation-errors
 :<- [:form/fields]
 (fn [fields _]
   (validate-message fields)))

(rf/reg-sub
 :form/validation-errors?
 :<- [:form/validation-errors]
 (fn [errors _]
   (not (empty? errors))))

(rf/reg-sub
 :form/errors
 :<- [:form/validation-errors]
 :<- [:form/server-errors]
 (fn [[validation server] _]
   (merge validation server)))


(rf/reg-sub
 :form/error
 :<- [:form/errors]
 (fn [errors [_ id]]
   (get errors id)))

;; message send

(rf/reg-event-fx
 :message/send!-called-back
 (fn [_ [_ {:keys [success errors]}]]
   (if success
     {:dispatch-n [[:form/clear-fields]
                   [:message/clear-media]
                   [:app/hide-reply-modals]]}
     (:dispatch [:form/set-server-errors errors]))))

(rf/reg-event-fx
 :message/send!
 (fn [{:keys [db]} [_ fields media]]
   (if (not-empty media)
     {:db (dissoc db :form/server-errors)
      :ajax/upload-media!
      {:url "/api/my-account/media/upload"
       :files media
       :handler
       (fn [response]
         (rf/dispatch
          [:message/send!
           (update fields :message
                   string/replace
                   #"\!\[(.*)\]\((.+)\)"
                   (fn [[old alt url]]
                     (str "![" alt "]("
                          (if-some [name ((:message/urls db) url)]
                            (get response name)
                            url) ")")))]))}}
     {:db (dissoc db :form/server-errors)
      :ws/send! {:message [:message/create! fields]
                 :timeout 10000
                 :callback-event [:message/send!-called-back]}})))

;; message media

(rf/reg-event-db
 :message/save-media
 (fn [db [_ img]]
   (let [url (js/URL.createObjectURL img)
         name (keyword (str "msg-" (random-uuid)))]
     (-> db
         (update-in [:form/fields :message] str "![](" url ")")
         (update :message/media (fnil assoc {}) name img)
         (update :message/urls (fnil assoc {}) url name)))))

(rf/reg-event-db
 :message/clear-media
 (fn [db _]
   (dissoc db :message/media :message/urls)))

(rf/reg-sub
 :message/media
 (fn [db [_]]
   (:message/media db)))

;; modal

(rf/reg-event-db
 :app/hide-reply-modals
 (fn [db _]
   (update db :app/active-modals #(into
                                   {}
                                   (remove (fn [[k v]]
                                             (= :reply-modal (first k))))
                                   %))))

(defn reload-messages-button
  "Reload Messge Button"
  []
  (let [loading? (rf/subscribe [:messages/loading?])]
    [:button.button.is-info.is-fullwidth
     {:on-click #(rf/dispatch [:messages/load])
      :disabled @loading?}
     (if @loading?
       "Loading Messages"
       "Refresh Messages")]))

;; boost

(rf/reg-event-fx
 :message/boost!
 (fn [{:keys [db]} [_ message]]
   {:ws/send!
    {:message [:message/boost! (select-keys message [:id :poster])]}}))

(defn message-content
  "Message Content"
  [{:keys [messages name author]
    :as m}]
  [:<>
   (if (seq messages)
     (doall
      (for [{:keys [message id] :as msg} (reverse messages)]
        ^{:key id}
        [md :p.reply-chain-item message]))
     [md (:message m)])
   [:p " - " name
    " <"
    (if author
      [:a {:href (str "/user/" author)} (str "@" author)]
      [:span.is-italic "account not found"])
    ">"]])

(defn post-meta
  "Post Meta"
  [{:keys [id is_boost timestamp posted_at poster poster_avatar source source_avatar] :as m}]
  (let [posted_at (or posted_at timestamp)]
    [:<> (when is_boost
           [:div.columns.is-vcentered.is-1.mb-0
            [:div.column.is-narrow.pb-0
             [image (or poster_avatar "/img/avatar-default.png") 24 24]]
            [:div.column.is-narrow.pb-0
             [:a {:href (str "/user/" poster "?post=" id)} poster]]
            [:div.column.is-narrow.pb-0 "♻"]
            [:div.column.is-narrow.pb-0
             [image (or source_avatar "/img/avatar-default.png") 24 24]]
            [:div.column.pb-0
             [:div.column.is-narrow.pb-0
              [:a {:href (str "/user/" source "?post=" id)} source]]]])
     [:div.mb-4>time
      (if posted_at
        (.toLocaleString posted_at)
        "NULL PSOTED_AT")]]))

(defn expand-post-button
  "Expand Post Button"
  [{:keys [id root_id] :as m}]
  [:button.button.is-rounded.is-small.is-secondary.is-outlined.level-item
   {:on-click
    (fn [_]
      (let [{{:keys [name]} :data
             {:keys [path query]} :parameters}
            @(rf/subscribe [:router/current-route])]
        (rtfe/replace-state name path (assoc query :post id)))
      (rtfe/push-state :guestbook.routes.app/post {:post root_id}
                       (when (not= root_id id)
                         {:reply id})))}
   [:span.material-icons.is-size-6
    "open_in_new"]])

(defn boost-button
  "Boost Button"
  [{:keys [boosts] :as m}]
  [:button.button.is-rounded.is-small.is-info.is-outlined.level-item
   {:on-click
    #(rf/dispatch [:message/boost! m])
    :disabled (nil? @(rf/subscribe [:auth/user]))}
   [:span.is-size-6 "♻"]
   [:span.ml-1 boosts]])

(declare reply-modal)

(rf/reg-event-fx
 :form/clear
 (fn [_ _]
   {:dispatch-n [[:form/clear-fields]
                 [:message/clear-media]]}))

(defn reply-button
  "Reply Button"
  [{:keys [reply_count] :as m}]
  [:<>
   [reply-modal m]
   [:button.button.is-rounded.is-small.is-outlined.level-item
    {:on-click (fn []
                 (rf/dispatch [:form/clear])
                 (rf/dispatch [:app/show-modal
                               [:reply-modal (:id m)]]))
     :disabled (not= @(rf/subscribe [:auth/user-state]) :authenticated)}
    [:span.material-icons.is-size-6
     "chat"]
    [:span.ml-1 reply_count]]])

(defn message
  ([m] [message m {}])
  ([{:keys [id timestamp message name author
            avatar boosts is_boost reply_count]
     :or {boosts 0}
     :as m}
    {:keys [include-link? include-bar?]
     :or {include-link? true
          include-bar? true}}]
   [:article.media
    [:figure.media-left
     [image (or avatar "/img/avatar-default.png") 128 128]]
    [:div.media-content
     [:div.content
      [post-meta m]
      [message-content m]]
     (when include-bar?
       [:nav.level
        [:div.level-left
         (when include-link?
           [expand-post-button m])
         [boost-button m]
         [reply-button m]]])]]))

(defn message-preview [m]
  (r/with-let [expanded (r/atom false)]
    [:<>
     [:button.button.is-secondary.is-fullwidth
      {:on-click #(swap! expanded not)}
      (if @expanded
        "Hide Preview"
        "Show Preview")]
     (when @expanded
       [:ul.messages
        {:style
         {:margin-left 0}}
        [:li
         [message m
          {:include-link? false}]]])]))

(defn message-form-preview [parent]
  (let [{:keys [login profile]} @(rf/subscribe [:auth/user])
        display-name (:display-name profile login)
        msg {:message @(rf/subscribe [:form/field :message])
             :id -1
             :timestamp (js/Date.)
             :name display-name
             :author login
             :avatar (:avatar profile)}]
    [message-preview
     (assoc msg :messages
            (cons msg (:messages parent)))]))

(defn errors-component [id & [message]]
  (when-let [error @(rf/subscribe [:form/error id])]
    [:div.notification.is-danger (if message
                                   message
                                   (string/join error))]))

(defn message-form-content []
  (let [{:keys [login profile]} @(rf/subscribe [:auth/user])
        display-name (:display-name profile login)]
    [:<>
     [errors-component :server-error]
     [errors-component :unauthorized "Please log in before posting."]
     [:div.field
      [:label.label {:for :name} "Name"]
      display-name]
     [:div.field
      [:div.control
       [image-uploader
        #(rf/dispatch [:message/save-media %])
        "Insert an Image"]]]
     [:div.field
      [:label.label {:for :message} "Message"]
      [errors-component :message]
      [textarea-input
       {:attrs {:name :message}
        :save-timeout 1000
        :value (rf/subscribe [:form/field :message])
        :on-save #(rf/dispatch [:form/set-field :message %])}]]]))

(defn reply-modal [parent]
  [modals/modal-card
   {:on-close #(rf/dispatch [:form/clear])
    :id [:reply-modal (:id parent)]}
   (str "Reply to post by user: " (:author parent))
   [:<>
    [message-form-preview parent]
    [message-form-content]]
   [:input.button.is-primary.is-fullwidth
    {:type :submit
     :disabled @(rf/subscribe [:form/validation-errors?])
     :on-click #(rf/dispatch [:message/send!
                              (assoc
                               @(rf/subscribe [:form/fields])
                               :parent (:id parent))
                              @(rf/subscribe [:message/media])])
     :value (str "Reply to " (:author parent))}]])

(defn msg-li [m message-id]
  (r/create-class
   {:component-did-mount
    (fn [this]
      (when (= message-id (:id m))
        (.scrollIntoView (dom/dom-node this))))
    :reagent-render
    (fn [_]
      [:li
       [message m]])}))

(defn message-list
  ([messages]
   [message-list messages nil])
  ([messages message-id]
   [:ul.messages
    (for [m @messages]
      ^{:key (:timestamp m)}
      [msg-li m message-id])]))

(defn message-form []
  [:div.card
   [:div.card-header>p.card-header-title
    "Post Something!"]

   [:div.card-content
    [message-form-preview {}]
    [message-form-content]
    ;; Comment button
    [:input.button.is-primary.is-fullwidth
     {:type :submit
      :disabled @(rf/subscribe [:form/validation-errors?])
      :on-click #(rf/dispatch [:message/send!
                               @(rf/subscribe [:form/fields])
                               @(rf/subscribe [:message/media])])
      :value "comment"}]]])

(defn message-list-placeholder []
  [:ul.messages
   [:li
    [:p "Loading Messages..."]
    [:div {:style {:width "10em"}}
     [:progress.progress.is-dark {:max 100} "30%"]]]])
