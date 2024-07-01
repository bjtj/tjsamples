(ns swag.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[swag started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[swag has shut down successfully]=-"))
   :middleware identity})
