(ns modernweb.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [modernweb.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[modernweb started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[modernweb has shut down successfully]=-"))
   :middleware wrap-dev})
