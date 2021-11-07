(ns guestbook.views.post
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [cljs.pprint :refer [pprint]]
   [guestbook.messages :as msg]))

(defn clear-post-keys
  ""
  [db]
  (dissoc db ::error ::post))

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

(rf/reg-sub
 ::error
 (fn [db _]
   (::error db)))

(rf/reg-sub
 ::loading?
 :<- [::post]
 :<- [::error]
 (fn [[post error] _]
   (and (empty? post) (empty? error))))

(def post-controllers
  [{:parameters {:path [:post]}
    :start (fn [{{:keys [post]} :path}]
             (rf/dispatch [::fetch-post post]))
    :stop (fn [_]
            (rf/dispatch [::clear-post]))}])

(defn loading-bar
  ""
  []
  [:progress.progress.is-dark {:max 100} "30%"])

(defn post
  ""
  [{:keys [name author message timestamp avatar] :as post-content}]
  [:div.content
   [:h3.title.is-3 "Post by " name
    "<" [:a {:href (str "/user/" author)} (str "@" author)] ">"]
   [:h4.subtitle.is-4 "Posted at " (.toLocaleString timestamp)]
   [msg/message post-content]])

(defn post-page
  ""
  [_]
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
