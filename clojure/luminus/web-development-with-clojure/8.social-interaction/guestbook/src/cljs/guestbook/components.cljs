(ns guestbook.components
  (:require [reagent.core :as r]))

(defn text-input
  ""
  [{val :value
    attrs :attrs
    :keys [on-save]}]
  (let [draft (r/atom nil)
        value (r/track #(or @draft @val ""))]
    (fn []
      [:input.input
       (merge attrs
              {:type :text
               :on-focus #(reset! draft (or @val ""))
               :on-blur (fn []
                          (on-save (or @draft ""))
                          (reset! draft nil))
               :on-change #(reset! draft (.. % -target -value))
               :value @value})])))

(defn textarea-input
  ""
  [{val :value
    attrs :attrs
    :keys [on-save]}]
  (let [draft (r/atom nil)
        value (r/track #(or @draft @val ""))]
    (fn []
      [:textarea.textarea
       (merge attrs
              {:on-focus #(reset! draft (or @val ""))
               :on-blur (fn []
                          (on-save (or @draft ""))
                          (reset! draft nil))
               :on-change #(reset! draft (.. % -target -value))
               :value @value})])))

(defn image
  ""
  [url width height]
  [:div {:style {:width width
                 :height height
                 :display :flex
                 :justify-content :center
                 :align-items :center
                 :background-color "#F5F5F5"
                 :margin-bottom "0.5em"}}
   [:img {:src url :style {:max-width width
                           :max-height height}}]])

(defn image-uploader
  ""
  [save-fn label-text]
  [:div.file>label.file-label
   [:input.file-input {:type :file
                       :on-change #(save-fn
                                    (-> %
                                        .-target
                                        .-files
                                        (aget 0)))}]
   [:span.file-cta
    [:span.file-label label-text]]])
