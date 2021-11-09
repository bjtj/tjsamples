(ns guestbook.components
  (:require
   [reagent.core :as r]
   [markdown.core :refer [md->html]]
   [markdown.transformers :refer [transformer-vector]]
   [clojure.string :as string]
   [goog.functions :as gf]))

(defn linkify-tags
  "Change tags into links"
  [text state]
  (if (or (:code state) (:codeblock state))
      [text state]
      [(string/replace
        text
        #_#"(?<=\s|^)#([-\w]+)(?=\s|$)"
        #"(\s|^)#([-\w]+)(?=\s|$)"
        "$1<a href=\"/tag/$2\"
title=\"View posts tagged #$2\"
target=\"_blacnk\">
#$2
</a>")
       state]))

(defn linkify-mentions
  "Change mentions into links"
  [text state]
  (if (or (:code state) (:codeblock state))
    [text state]
    [(string/replace
      text
      #_#"@([-\w]+)(?=\s|$)"
      #"(\s|^)@([-\w]+)(?=\s|$)"
      "$1<a href=\"/user/$2\"
title=\"Homepage of @$2\"
target=\"_blank\">
@$2
</a>")
     state]))

(defn escape-html
  "Change special characters into HTML character entities."
  [text state]
  (if (or (:code state) (:codeblock state))
    [text state]
    [(string/escape text {\& "&amp;"
                          \< "&lt;"
                          \> "&gt;"
                          \" "&quot;"
                          \' "&#39;"})
     state]))

(def transformers
  (into [escape-html linkify-tags linkify-mentions] transformer-vector))

(defn parse-message
  ""
  [message]
  (md->html message :replacement-transformers transformers))

(defn md
  ""
  ([content]
   [md :p {} content])
  ([tag content]
   [md tag {} content])
  ([tag attrs content]
   [tag (-> attrs
            (assoc :dangerouslySetInnerHTML
                   {:__html (parse-message content)})
            (update :class (fnil conj []) "markdown"))]))

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
    ms :save-timeout
    :keys [on-save]}]
  (let [draft (r/atom nil)
        value (r/track #(or @draft @val ""))
        save-on-change (if ms
                         (gf/debounce on-save ms)
                         (fn [& _]))]
    (fn []
      [:textarea.textarea
       (merge attrs
              {:on-focus #(reset! draft (or @val ""))
               :on-blur (fn []
                          (on-save (or @draft ""))
                          (reset! draft nil))
               :on-change (fn [e]
                            (let [v (.. e -target -value)]
                              (reset! draft v)
                              (save-on-change v)))
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
