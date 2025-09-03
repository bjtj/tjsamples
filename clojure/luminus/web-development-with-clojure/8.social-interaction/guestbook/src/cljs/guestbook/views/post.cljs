(ns guestbook.views.post
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom :as dom]
   [cljs.pprint :refer [pprint]]
   [guestbook.messages :as msg]
   [guestbook.websockets :as ws]))

(defn clear-post-keys [db]
  (dissoc db ::error ::post))

;; Post

(rf/reg-event-fx
 ::fetch-post
 (fn [{:keys [db]} [_ post-id]]
   {:db (clear-post-keys db)
    :ajax/get {:url (str "/api/message/" post-id)
               :success-path [:message]
               :success-event [::set-post]
               :error-event [::set-post-error]}}))

(rf/reg-event-db
 ::set-post
 (fn [db [_ post]]
   (assoc db ::post post)))

(rf/reg-event-db
 ::set-post-error
 (fn [db [_ response]]
   (assoc db ::error response)))

(rf/reg-event-db
 ::clear-post
 (fn [db _]
   (clear-post-keys db)))

(rf/reg-sub
 ::post
 (fn [db _]
   (::post db nil)))

;; Error

(rf/reg-sub
 ::error
 (fn [db _]
   (::error db)))

;; Loading

(rf/reg-sub
 ::loading?
 :<- [::post]
 :<- [::error]
 (fn [[post error] _]
   (and (empty? post) (empty? error))))

;; Replies

(rf/reg-event-fx
 ::fetch-replies
 (fn [{:keys [db]} [_ post-id]]
   {:db (assoc-in db [::replies-status post-id] :loading)
    :ajax/get {:url (str "/api/message/" post-id "/replies")
               :success-path [:replies]
               :success-event [::add-replies post-id]
               :error-event [::set-replies-error post-id]}}))

(rf/reg-event-db
 ::add-replies
 (fn [db [_ post-id replies]]
   (-> db
       (update ::posts (fnil into {}) (map (juxt :id identity)) replies)
       (assoc-in [::replies post-id] (map :id replies))
       (assoc-in [::replies-status post-id] :success))))

(rf/reg-event-db
 ::set-replies-error
 (fn [db [_ post-id response]]
   (-> db
       (assoc-in [::replies-status post-id] response))))

(rf/reg-event-db
 ::clear-replies
 (fn [db _]
   (dissoc db ::posts ::replies ::replies-status)))

;; Subscriptions

(rf/reg-sub
 ::posts
 (fn [db _]
   (assoc
    (::posts db)
    (:id (:post db))
    (::post db))))

(rf/reg-sub
 ::reply
 :<- [::posts]
 (fn [posts [_ id]]
   (get posts id)))

(rf/reg-sub
 ::replies-map
 (fn [db _]
   (::replies db)))

(rf/reg-sub
 ::replies-for-post
 :<- [::replies-map]
 (fn [replies [_ id]]
   (get replies id)))

(rf/reg-sub
 ::replies-status-map
 (fn [db _]
   (::replies-status db)))

(rf/reg-sub
 ::replies-status
 :<- [::replies-status-map]
 (fn [statuses [_ id]]
   (get statuses id)))

(rf/reg-sub
 ::reply-count
 (fn [[_ id] _]
   (rf/subscribe [::reply id]))
 (fn [post _]
   (:reply_count post)))

(rf/reg-sub
 ::has-replies?
 (fn [[_ id] _]
   (rf/subscribe [::reply-count id]))
 (fn [c _]
   (not= c 0)))

(rf/reg-sub
 ::replies-to-load
 (fn [[_ id] _]
   [(rf/subscribe [::reply-count id]) (rf/subscribe [::replies-for-post id])])
 (fn [[c replies] _]
   (- c (count replies))))

;; expand

(rf/reg-event-db
 ::expand-post
 (fn [db [_ id]]
   (update db ::expanded-posts (fnil conj #{}) id)))

(rf/reg-event-db
 ::collapse-post
 (fn [db [_ id]]
   (update db ::expanded-posts (fnil disj #{}) id)))

(rf/reg-event-db
 ::collapse-all
 (fn [db [_ id]]
   (dissoc db ::expanded-posts)))

(rf/reg-sub
 ::post-expanded?
 (fn [db [_ id]]
   (contains? (::expanded-posts db) id)))

;; Message

(rf/reg-event-db
 ::add-message
 (fn [db [_ post-id {:keys [root_id messages]}]]
   (if (= post-id root_id)
     (let [parent-id (:id (second messages)) ]
       (if (= parent-id post-id)
         (update-in db [::post :reply_count] inc)
         (update db ::posts
                 #(if (contains? % parent-id)
                    (update-in % [parent-id :reply_count] inc)
                    %))))
     db)))

;; parents

(rf/reg-event-fx
 ::fetch-parents
 (fn [{:keys [db]} [_ post-id]]
   {:ajax/get {:url (str "/api/message/" post-id "/parents")
               :success-path [:parents]
               :success-event [::add-parents post-id]}}))

(defn add-post-to-db [db {:keys [id parent] :as post}]
  (-> db
      (assoc-in [::posts id] post)
      (update-in [::replies parent]
                 #(if (some (partial = id) %)
                    %
                    (conj % id)))
      (assoc-in [::replies-status id] :success)
      (update ::expanded-posts (fnil conj #{}) id)))

(rf/reg-event-db
 ::add-parents
 (fn [db [_ post-id parents]]
   (reduce add-post-to-db db parents)))

(rf/reg-event-db
 ::set-scroll-to
 (fn [db [_ id]]
   (if (nil? id)
     (dissoc db ::scroll-to-post)
     (assoc db ::scroll-to-post id))))

(rf/reg-sub
 ::scroll?
 (fn [db [_ id]]
   (= id (::scroll-to-post db))))

;; -----------------------------------------

(defn loading-bar []
  [:progress.progress.is-dark {:max 100} "30%"])

(def post-controllers
  [{:parameters {:path [:post]}
    :start (fn [{{:keys [post]} :path}]
             (rf/dispatch [:ws/set-message-add-handler [::add-message post]])
             (rf/dispatch [::fetch-post post])
             (rf/dispatch [::fetch-replies post]))
    :stop (fn [_]
            (rf/dispatch [:ws/set-message-add-handler nil])
            (rf/dispatch [::collapse-all])
            (rf/dispatch [::clear-post])
            (rf/dispatch [::clear-replies]))}
   {:parameters {:query [:reply]}
    :start (fn [{{:keys [reply]} :query}]
             (when reply
               (rf/dispatch [::set-scroll-to reply])
               (rf/dispatch [::fetch-parents reply])))
    :stop (fn [_]
            (rf/dispatch [::set-scroll-to nil]))
    }])

(defn reply [post-id]
  (r/create-class
   {:component-did-mount
    (fn [this]
      (let [message-id (-> @(rf/subscribe [:router/current-route])
                           :parameters
                           :query
                           :reply)]
        (when (= message-id post-id)
          (.scrollIntoView (dom/dom-node this)))))
    :reagent-render
    (fn [_]
      [msg/message
       @(rf/subscribe [::reply post-id])
       {:include-link? false}])}))

(defn expand-control [post-id]
  (let [expanded? @(rf/subscribe [::post-expanded? post-id])
        reply-count @(rf/subscribe [::reply-count post-id])
        replies-to-load @(rf/subscribe [::replies-to-load post-id])
        loaded? (= replies-to-load 0)
        status @(rf/subscribe [::replies-status post-id])]
    [:div.field.has-addons
     [:p.control>span.button.is-static reply-count " replies"]
     [:p.control>button.button
      {:on-click (fn []
                   (if expanded?
                     (rf/dispatch [::collapse-post post-id])
                     (do
                       (when-not loaded?
                         (rf/dispatch [::fetch-replies post-id]))
                       (rf/dispatch [::expand-post post-id]))))
       :disabled (= status :loading)}
      (str (if expanded? "-" "+"))]
     (when expanded?
       [:p.control>button.button
        {:on-click #(rf/dispatch [::fetch-replies post-id])
         :disabled (= status :loading)}
        (if loaded?
          ""
          (str "Load " replies-to-load " New Replies"))])]))

(defn reply-tree [post-id]
  (when @(rf/subscribe [::has-replies? post-id])
    (let [status @(rf/subscribe [::replies-status post-id]) ]
      [:<>
       [expand-control post-id]
       (case status
         nil nil
         :success
         (when @(rf/subscribe [::post-expanded? post-id])
           [:div
            {:style {:border-left "1px dotted blue"
                     :padding-left "10px"}}
            (doall
             (for [id @(rf/subscribe [::replies-for-post post-id]) ]
               ^{:key id}
               [:<>
                [reply id]
                [reply-tree id]]))])
         :loading [loading-bar]
         ;; else
         [:div
          [:h3 "Error"]
          [:pre (with-out-str (pprint status))]])])))

(defn post [{:keys [name author message timestamp avatar id]
             :as post-content}]
  [:div.content
   [:button.button.is-info.is-outlined.is-fullwidth
    {:on-click #(.back js/window.history)}
    "Back to Feed"]
   [:h3.title.is-3 "Post by " name
    "<" [:a {:href (str "/user/" author)} (str "@" author)] ">"]
   [:h4.subtitle.is-4 "Posted at " (.toLocaleString timestamp)]
   [msg/message post-content {:include-link? false}]
   [reply-tree id]])

(defn post-page [_]
  (let [post-content @(rf/subscribe [::post])
        {status :status
         {:keys [message]} :response
         :as error} @(rf/subscribe [::error])]
    (cond
      @(rf/subscribe [::loading?])
      [:div.content
       [:p "Loading Message..."]
       [loading-bar]]
      
      (seq error)
      (case status
        404
        [:div.content
         [:p (or message "Post not found.")]
         [:pre (with-out-str (pprint error))]]
        403
        [:div.content
         [:p (or message "You are not allowed to view this post.")]
         [:pre (with-out-str (pprint @error))]]
        [:div
         [:p (or message "Unknown Error")]
         [:pre (with-out-str (pprint @error))]])
      (seq post-content)
      [post post-content])))
