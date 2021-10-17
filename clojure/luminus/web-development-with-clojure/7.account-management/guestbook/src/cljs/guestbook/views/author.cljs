(ns guestbook.views.author
  (:require [re-frame.core :as rf]
            [guestbook.messages :as messages]))

(def author-controllers
  [{:parameters {:path [:user]}
    :start (fn [{{:keys [user]} :path}]
             (rf/dispatch [:messages/load-by-author user]))}])

(defn author
  ""
  [{{{:keys [user]} :path} :parameters}]
  (let [messages (rf/subscribe [:messages/list])]
    (fn [{{{:keys [user]} :path} :parameters}]
      [:div.content>div.columns.is-centered>div.column.is-two-thirds
       [:div.columns>div.column
        [:h3 "Messages By " user]
        (if @(rf/subscribe [:messages/loading?])
          [messages/message-list-placeholder]
          [messages/message-list messages])]])))
