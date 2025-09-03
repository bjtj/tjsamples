(ns guestbook.views.home
  (:require [re-frame.core :as rf]
            [guestbook.messages :as messages]
            [guestbook.auth :as auth]))

(def home-controllers
  [{:start (fn [_]
             (rf/dispatch [:messages/load]))}])

(defn home [{{{post :post} :query} :parameters}]
  (let [messages (rf/subscribe [:messages/list])]
    (fn []
      [:div.content>div.columns.is-centered>div.column.is-two-thirds
       [:div.columns>div.column
        [:h3 "Messages"]
        (if @(rf/subscribe [:messages/loading?])
          [messages/message-list-placeholder]
          [messages/message-list messages post])]
       [:div.columns>div.column
        [messages/reload-messages-button]]
       [:div.columns>div.column
        (case @(rf/subscribe [:auth/user-state])
          :loading
          [:div {:style {:width "5em"}}
           [:progress.progress.is-dark.is-small {:max 100} "30%"]]
          :authenticated
          [messages/message-form]
          :anonymous
          [:div.notification.is-clearfix
           [:span "Log in or create an account to post a message!"]
           [:div.buttons.is-pulled-right
            [auth/login-button]
            [auth/register-button]]])]])))
