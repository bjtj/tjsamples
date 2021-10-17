(ns guestbook.routes.app
  (:require
   #?@(:clj [[guestbook.layout :as layout]
             [guestbook.middleware :as middleware]]
       :cljs [[guestbook.views.home :as home]
              [guestbook.views.author :as author]])))

#?(:clj
   (defn home-page
     ""
     [request]
     (layout/render
      request
      "home.html")))

(defn app-routes
  ""
  []
  [""
   #?(:clj {:middleware [middleware/wrap-csrf]
            :get home-page})
   ["/"
    (merge
     {:name ::home}
     #?(:cljs
        {:view #'home/home}))]
   ["/user/:user"
    (merge
     {:name ::author}
     #?(:cljs {:view #'author/author}))]])
