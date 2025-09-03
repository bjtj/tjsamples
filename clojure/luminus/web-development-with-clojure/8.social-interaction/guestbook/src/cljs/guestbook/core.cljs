(ns guestbook.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [re-frame.core :as rf]
            [ajax.core :refer [GET POST]]
            [clojure.string :as string]
            [guestbook.validation :refer [validate-message]]
            [reitit.coercion.spec :as reitit-spec]
            [reitit.frontend :as rtf]
            [reitit.frontend.easy :as rtfe]
            [reitit.frontend.controllers :as rtfc]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [guestbook.routes.app :refer [app-routes]]
            [guestbook.websockets :as ws]
            [guestbook.auth :as auth]
            [guestbook.messages :as messages]
            [guestbook.ajax :as ajax]
            [mount.core :as mount]))

(rf/reg-event-fx
 :app/initialize
 (fn-traced [_ _]
            {:db {:session/loading? true}
             :dispatch-n [[:session/load]]}))

(def router
  (rtf/router
   (app-routes)
   {:data {:coercion reitit-spec/coercion}}))

(rf/reg-event-db
 :router/navigated
 (fn [db [_ new-match]]
   (assoc db :router/current-route new-match)))

(rf/reg-sub
 :router/current-route
 (fn [db]
   (:router/current-route db)))

(defn init-routes! []
  (rtfe/start!
   router
   (fn [new-match]
     (when new-match
       (let [{controllers :controllers}
             @(rf/subscribe [:router/current-route])
             new-match-with-controllers
             (assoc new-match
                    :controllers
                    (rtfc/apply-controllers controllers new-match))]
         (rf/dispatch [:router/navigated new-match-with-controllers]))))
   {:use-fragment false}))

(defn navbar []
  (let [burger-active (r/atom false)]
    (fn []
      [:nav.navbar.is-info
       [:div.container
        [:div.navbar-brand
         [:a.navbar-item
          {:href "/"
           :style {:font-weight "bold"}}
          "guestbook"]
         [:span.navbar-burger.burger
          {:data-target "nav-menu"
           :on-click #(swap! burger-active not)
           :class (when @burger-active "is-active")}
          [:span]
          [:span]
          [:span]]]
        [:div#nav-menu.navbar-menu
         {:class (when @burger-active "is-active")}
         [:div.navbar-start
          [:a.navbar-item
           {:href "/"}
           "Home"]
          (when (= @(rf/subscribe [:auth/user-state]) :authenticated)
            [:<>
             [:a.navbar-item
              {:href (rtfe/href :guestbook.routes.app/author
                                {:user (:login @(rf/subscribe [:auth/user]))})}
              "My Posts"]
             [:a.navbar-item
              {:href (rtfe/href :guestbook.routes.app/feed)}
              "My Feed"]])
          [:div.navbar-end
           [:div.navbar-item
            (case @(rf/subscribe [:auth/user-state])
              :loading
              [:div {:style {:width "5em"}}
               [:progress.progress.is-dark.is-small {:max 100} "30%"]]
              :authenticated
              [:div.buttons
               [auth/nameplate @(rf/subscribe [:auth/user])]
               [auth/logout-button]]
              :anonymous
              [:div.buttons
               [auth/login-button]
               [auth/register-button]])]]]]]])))

(defn page [{{:keys [view name]} :data path :path :as match}]
  [:section.section>div.container
   (if view
     [view match]
     [:div "No view specified for route: " name " (" path ")"])])

(defn app []
  (let [current-route @(rf/subscribe [:router/current-route])]
    [:div.app
     [navbar]
     [page current-route]]))

(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (.log js/console "Mounting Components...")
  (init-routes!)
  (dom/render [#'app] (.getElementById js/document "content"))
  (.log js/console "Components Mounted!"))

(defn init! []
  (.log js/console "Initializing App...")
  (mount/start)
  (rf/dispatch-sync [:app/initialize])
  (mount-components))
