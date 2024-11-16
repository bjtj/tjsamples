(ns cognitect-aws-api.cognitect-aws-api
  (:gen-class)
  (:require [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as credentials]
            [clojure.edn :as edn]
            [clojure.java.io :as io]))

(def env (edn/read-string (slurp "config.edn")))

(def s3 (aws/client {:api :s3
                     :credentials-provider (credentials/basic-credentials-provider
                                            {:access-key-id     (:access-key-id env)
                                             :secret-access-key (:secret-access-key env)})}))

(defn list-buckets
  []
  (prn (aws/invoke s3 {:op :ListBuckets})))

(defn -main
  [& args]
  (list-buckets))
