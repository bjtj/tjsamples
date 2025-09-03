(ns guestbook.views.author
  (:require [re-frame.core :as rf]
            [guestbook.messages :as messages]
            [guestbook.subscriptions :as sub]
            [reitit.frontend.easy :as rtfe]))

(rf/reg-event-fx
 ::fetch-author
 (fn [{:keys [db]} [_ login]]
   {:db (assoc db
               ::author nil
               ::loading? true)
    :ajax/get {:url (str "/api/author/" login)
               :success-event [::set-author]}}))

(rf/reg-event-db
 ::set-author
 (fn [db [_ author]]
   (if author
     (assoc db
            ::author author
            ::loading? false)
     (dissoc db ::author))))

(rf/reg-sub
 ::author
 (fn [db _]
   (get db ::author)))

(rf/reg-sub
 ::is-current-author?
 :<- [:auth/user]
 :<- [::author]
 (fn [[user author] _]
   (= (:login user) (:login author))))

(rf/reg-sub
 ::loading?
 (fn [db _]
   (::loading? db)))

(def author-controllers
  [{:parameters {:path [:user]}
    :start (fn [{{:keys [user]} :path}]
             (rf/dispatch [:messages/load-by-author user]))}
   {:parameters {:path [:user]}
    :start (fn [{{:keys [user]} :path}]
             (rf/dispatch [::fetch-author user]))
    :stop (fn [_]
            (rf/dispatch [::set-author nil]))}])

(defn banner-component [url]
  [:figure.image {:style {:width "100%"
                          :height "10vw"
                          :overflow "hidden"
                          :margin-left 0
                          :margin-right 0}}
   [:img {:src url}]])

(defn title []
  (if @(rf/subscribe [::is-current-author?])
    [:div.level
     [:h2.level-left "My Author Page"]
     [:a.level-right {:href (rtfe/href :guestbook.routes.app/profile)}
      "Edit Page"]]
    (let [{:keys [display-name login]} @(rf/subscribe [::author])]
      [:h2 display-name " <@" login ">'s Page"])))

(defn author [_]
  (let [messages (rf/subscribe [:messages/list])
        author (rf/subscribe [::author])]
    (fn [{{{:keys [user]} :path
           {:keys [post]} :query} :parameters}]
      (if @(rf/subscribe [::loading?])
        [:div.content
         [:div {:style {:width "100%"}}
          [:progress.progress.is-dark {:max 100} "30%"]]]
        (let [{{:keys [display-name banner bio]} :profile} @author]
          [:div.content
           [banner-component (or banner "/img/banner-default.png")]
           [title]
           (when bio
             [:p bio])
           [:div.content>div.columns.is-centered>div.column.is-two-thirds
            [:div.columns>div.column
             [:h3 "Posts by " display-name " <@" user ">"]
             [sub/subscribe-button :follows user]
             (if @(rf/subscribe [:messages/loading?])
               [messages/message-list-placeholder]
               [messages/message-list messages post])]
            (when @(rf/subscribe [::is-current-author?])
              [:div.columns>div.column
               [:h4 "New Post"]
               [messages/message-form]])]])))))

