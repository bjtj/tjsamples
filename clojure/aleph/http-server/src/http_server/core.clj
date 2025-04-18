(ns http-server.core
  (:require [aleph.http :as http]))

(defn handler [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello!"})

(defn -main
  [& _]
  (http/start-server handler {:port 8080}))
