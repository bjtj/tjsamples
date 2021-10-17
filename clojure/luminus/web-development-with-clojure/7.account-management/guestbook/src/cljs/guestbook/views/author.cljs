(ns guestbook.views.author
  (:require [re-frame.core :as rf]
            [guestbook.messages :as messages]))

(defn author
  ""
  [{{{:keys [user]} :path} :parameters}]
  (rf/dispatch [:messages/load-by-author user])
  (let [messages (rf/subscribe [:messages/list])]
    (fn [{{{:keys [user]} :path} :parameters}]
      [:div.content>div.columns.is-centered>div.column.is-two-thirds
       [:div.columns>div.column
        [:h3 "Messages By " user]
        [messages/message-list messages]]])))
