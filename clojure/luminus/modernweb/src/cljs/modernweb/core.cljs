(ns modernweb.core
  (:require
    [day8.re-frame.http-fx]
    [reagent.dom :as rdom]
    [reagent.dom.client :as rcli]
    [reagent.core :as r]
    [re-frame.core :as rf]
    [goog.events :as events]
    [goog.history.EventType :as HistoryEventType]
    [markdown.core :refer [md->html]]
    [modernweb.ajax :as ajax]
    [modernweb.events]
    [modernweb.components :as mcomp :refer [m-button]]
    [reitit.core :as reitit]
    [reitit.frontend.easy :as rfe]
    ["@headlessui/react" :as hui]
    [clojure.string :as string])
  (:import goog.History))

(rf/reg-event-db
 :form/set-field
 [(rf/path :form/fields)]
 (fn [fields [_ id value]]
   (assoc fields id value)))

(rf/reg-event-db
 :form/clear-fields
 [(rf/path :form/fields)]
 (fn [_ _]
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


(defn nav-link [uri title page]
  [:div>a.navbar-item
   {:href   uri
    :class (when (= page @(rf/subscribe [:common/page-id])) "font-bold")}
   title])

(defn navbar [] 
  (r/with-let [expanded? (r/atom false)]
    [:nav.navbar
     [:div.bg-teal-500.p-6
      {:class "sm:flex sm:items-center sm:justify-between"}
      [:div
       {:class "flex items-center justify-between"}
       [:a.navbar-item {:href "/" :class [:text-2xl]} "ModernWeb"]
       [:div
        {:data-target :nav-menu
         :on-click #(swap! expanded? not)
         :class [(when @expanded? :is-active) "sm:hidden"]}
        [:svg {:class "h-6 w-6 fill-current" :view-box "0 0 24 24"}
         (if @expanded?
           [:path {:fill-rule "evenodd" :d "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}]
           [:path {:fill-rule "evenodd" :d "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}])]
        ]]
      [:div#nav-menu
       {:class [(if @expanded? :block :hidden) "p-3 sm:flex sm:p-0"]}
       [nav-link "#/" "Home" :home]
       [:div {:class "hidden sm:block sm:mx-1"} "|"]
       [nav-link "#/users" "Users" :users]
       [:div {:class "hidden sm:block sm:mx-1"} "|"]
       [nav-link "#/about" "About" :about]]]]))

(defn about-page []
  [:section.section>div.container>div.content.p-3
   [:div.text-2xl "About"]
   [:img {:src "/img/warning_clojure.png"}]])

(defn home-page []
  [:section.section>div.container>div.content.p-3
   [:hui/button {:class "bg-gray-300 p-3 rounded hover:bg-opacity-70"
                 :on-click (fn []
                             (js/alert "Hello!"))
                 } "Click Me!"]
   ])

(defn user-view
  ""
  [user]
  (let [email (user "email")
        name (user "name")
        id (user "id")]
    [:div.p-3
     [:ul.flex.items-center.justify-between
      [:div
       [:li [:span.text-xs.bg-gray-300.rounded-full.px-2 {:class "py-0.5"} id]]
       [:li [:span.font-bold "e-mail: "] email]
       [:li [:span.font-bold "name: "] name]]
      [m-button "Delete"
       {:on-click (fn [] (js/alert (str "delete " id))
                    (rf/dispatch [:fetch-delete-user id]))}]]
    ]))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [val (r/atom "foo")]
    (fn []
      [:div
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))

(defn new-user-form
  ""
  []
  (let [name (rf/subscribe [:form/field :name])
        draft-name (r/atom nil)
        value-name (r/track #(or @draft-name @name ""))
        email (rf/subscribe [:form/field :email])
        draft-email (r/atom nil)
        value-email (r/track #(or @draft-email @email ""))]
    (fn []
      [:div
       [:ul.space-y-2
        [:li "e-mail: " [:input
                        {:type "text"
                         :on-focus #(reset! draft-email (or @email ""))
                         :on-blur (fn []
                                    (rf/dispatch [:form/set-field :email (or @draft-email "")])
                                    (reset! draft-email nil))
                         :value @value-email
                         :on-change #(reset! draft-email (.. % -target -value))}]]
        [:li "Name: " [:input
                       {:type :text
                        :on-focus #(reset! draft-name (or @name ""))
                        :on-blur (fn []
                                   (rf/dispatch [:form/set-field :name (or @draft-name "")])
                                   (reset! draft-name nil))
                        :value @value-name
                        :on-change #(reset! draft-name (.. % -target -value))}]]]
       [m-button "Create User"
        {:class "mt-2"
         :on-click (fn []
                     (rf/dispatch [:fetch-create-user
                                   @(rf/subscribe [:form/fields])
                                   :form/clear-fields])
                     )}]])))

(defn users-page
  ""
  []
  [:div
   (if-let [users (not-empty @(rf/subscribe [:users]))]
     (map (fn [user] [user-view user]) users)
     [:div.text-center.p-7.text-gray-500 "No users..."])
   [:div.flex.items-center.justify-center
    [new-user-form]]])

(defn page []
  (if-let [page @(rf/subscribe [:common/page])]
    [:div
     [navbar]
     [page]]))

(defn navigate! [match _]
  (rf/dispatch [:common/navigate match]))

(def router
  (reitit/router
    [["/" {:name        :home
           :view        #'home-page
           :controllers [{:start (fn [_] (rf/dispatch [:page/init-home]))}]}]
     ["/users" {:name :users
                :view #'users-page
                :controllers [{:start (fn [_] (rf/dispatch [:page/init-users]))}]}]
     ["/about" {:name :about
                :view #'about-page}]]))

(defn start-router! []
  (rfe/start!
    router
    navigate!
    {}))

;; -------------------------
;; Initialize app
(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (rcli/render
   (rcli/create-root (.getElementById js/document "app"))
   [#'page]))

(defn init! []
  (start-router!)
  (ajax/load-interceptors!)
  (mount-components))
