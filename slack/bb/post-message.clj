#!/usr/bin/env bb

(require '[babashka.curl :as curl]
         '[cheshire.core :as json])

(when (not (= 2 (count *command-line-args*)))
  (prn :error "USAGE: <channel> <text>")
  (System/exit 1))

(def token (slurp ".token"))
(def channel (first *command-line-args*))
(def text (second *command-line-args*))

(prn :channel channel :text text)

(->
 (curl/post "https://slack.com/api/chat.postMessage"
            {:headers {"Authorization" (format "Bearer %s" token)}
             :form-params {"channel" channel
                           "text" text}})
 :body
 prn)
