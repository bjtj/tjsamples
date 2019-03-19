(ns user
  (:require
    [my-app.config :refer [env]]
    [clojure.spec.alpha :as s]
    [expound.alpha :as expound]
    [mount.core :as mount]
    [my-app.core :refer [start-app]]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'my-app.core/repl-server))

(defn stop []
  (mount/stop-except #'my-app.core/repl-server))

(defn restart []
  (stop)
  (start))


