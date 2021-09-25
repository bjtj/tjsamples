(ns guestbook.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]))

(dom/render
 [:h1 "Hello, Reagent"]
 (.getElementById js/document "content"))

(dom/render
 [:div {:id "hello", :class "content"} [:h1 "Hello, Auto!"]]
 (.getElementById js/document "content"))

(dom/render
 [:div#hello.content>h1 "Hello, Auto!!"]
 (.getElementById js/document "content"))


(defn message-form
  ""
  []
  (let [fields (r/atom {})]
    (fn []
      [:div
       [:p "Name: " (:name @fields)]
       [:p "Message: " (:message @fields)]
       [:div.field
        [:label.label {:for :name} "Name"]
        [:input.input
         {:type :text
          :name :name
          :on-change #(swap! fields
                             assoc :name (-> % .-target .-value))
          :value (:name @fields)}]]
       [:div.field
        [:label.label {:for :message} "Message"]
        [:textarea.textarea
         {:name :message
          :value (:message @fields)
          :on-change #(swap! fields
                             assoc :message (-> % .-target .-value))}]]
       [:input.button.is-primary
        {:type :submit
         :value "comment"}]])))

(defn home
  ""
  []
  [:div.content>div.columns.is-centered>div.colums.is-two-thirds
   [:div.columns>div.column
    [message-form]]])

(dom/render
 [home]
 (.getElementById js/document "content"))
