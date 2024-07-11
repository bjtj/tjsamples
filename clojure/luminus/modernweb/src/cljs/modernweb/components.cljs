(ns modernweb.components)


(defn m-button
  ""
  [text {:keys [class] :as attrs}]
  [:button.p-2.bg-gray-300.rounded-lg
   (merge
    {:class (str "hover:bg-opacity-70 " (or class ""))}
    attrs)
   text])
