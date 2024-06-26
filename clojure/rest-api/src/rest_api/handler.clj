(ns rest-api.handler
  (:use ring.util.response)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/api" [] "Welcome to the API")
  (GET "/api/json" [] (response {:message "This is JSON"}))
  (route/not-found "Not Found"))

(def app
  (-> (wrap-defaults app-routes site-defaults)
      (wrap-json-response)
      (wrap-json-body)))
