(ns ring-example.ring-example
  (:require [aero.core :refer [read-config] :as aero]
            [clojure.java.io :as io]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [ring.util.response :as res]
            [ring.middleware.oauth2 :refer [wrap-oauth2]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.params :refer [wrap-params]])
  (:gen-class))

(def env (read-config (io/file "config.edn")))

(def client-id (:client-id env))
(def client-secret (:client-secret env))

(def config
  {:google {:authorize-uri    "https://accounts.google.com/o/oauth2/auth"
            :access-token-uri "https://oauth2.googleapis.com/token"
            :client-id        client-id
            :client-secret    client-secret
            :launch-uri       "/oauth2/google"
            :redirect-uri     "/oauth2/google/callback"
            :landing-uri      "/"
            :scopes           ["openid" "email" "profile"]}})

(defroutes app-routes
  (GET "/" request (str "<h2>Welcome to My App</h2><p><a href='/oauth2/google'>Login with Google</a></p><p><a href='/logout'>Logout</a></p><pre style=\"white-space: pre-wrap;\">" (pr-str (-> request :oauth2/access-tokens :google)) "</pre>"))
  (GET "/logout" {:keys [session]}
    (-> (res/redirect "/")
        (assoc :session nil)))
  (GET "/oauth2/google/callback" [oauth2]
    (str "<h2>OAuth2 Callback Response</h2><pre>" oauth2 "</pre>"))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-oauth2 config)
      (wrap-defaults site-defaults)
      wrap-params))

(defonce server (atom []))

(defn start-server
  []
  (reset! server (run-jetty app {:port 3000 :join? false})))

(defn stop-server
  []
  (.stop @server))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (start-server))
