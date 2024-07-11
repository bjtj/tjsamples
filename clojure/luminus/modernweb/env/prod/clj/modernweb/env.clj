(ns modernweb.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[modernweb started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[modernweb has shut down successfully]=-"))
   :middleware identity})
