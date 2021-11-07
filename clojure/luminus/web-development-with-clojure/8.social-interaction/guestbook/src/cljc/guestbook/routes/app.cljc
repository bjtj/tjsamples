(ns guestbook.routes.app
  (:require
   #?@(:clj [[guestbook.layout :as layout]
             [guestbook.middleware :as middleware]]
       :cljs [[guestbook.views.home :as home]
              [guestbook.views.author :as author]
              [guestbook.views.profile :as profile]])))

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
        {:controllers home/home-controllers
         :view #'home/home}))]
   ["/user/:user"
    (merge
     {:name ::author}
     #?(:cljs {:controllers author/author-controllers
               :view #'author/author}))]
   ["/my-account/edit-profile"
    (merge
     {:name ::profile}
     #?(:cljs {:controllers profile/profile-controllers
               :view #'profile/profile}))]
   ])
