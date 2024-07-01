(ns swag.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [swag.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[swag started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[swag has shut down successfully]=-"))
   :middleware wrap-dev})
