(ns clj-slack-sample.clj-slack-sample
  (:gen-class)
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clj-slack.chat :as chat]))

(defn read-env []
  (edn/read-string (slurp "config.edn")))

(defn post-message
  "Callable entry point to the application."
  [env text]
  (let [token (:TOKEN env)
        channel (:CHANNEL env)
        conn {:api-url "https://slack.com/api" :token token}]
    (chat/post-message conn channel text)))

(defn -main
  [& args]
  (let [env (read-env)]
    (post-message env "hello!!")))
