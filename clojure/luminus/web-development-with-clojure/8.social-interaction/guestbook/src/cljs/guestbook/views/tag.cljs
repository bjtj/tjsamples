(ns guestbook.views.tag
  (:require [re-frame.core :as rf]
            [guestbook.messages :as messages]
            [guestbook.subscriptions :as sub]))

(def tag-controllers
  [{:parameters {:path [:tag]}
    :start (fn [{{:keys [tag]} :path}]
             (rf/dispatch [:messages/load-by-tag tag]))}])

(defn tag [_]
  (let [messages (rf/subscribe [:messages/list])]
    (fn [{{{:keys [tag]} :path
           {:keys [post]} :query} :parameters}]
      [:div.content
       [:div.columns.is-centered>div.column.is-two-thirds
        [:div.columns>div.column
         [:h3 (str "Posts tagged #" tag)]
         [sub/subscribe-button :tags tag]
         (if @(rf/subscribe [:messages/loading?])
           [messages/message-list-placeholder]
           [messages/message-list messages post])]]])))

