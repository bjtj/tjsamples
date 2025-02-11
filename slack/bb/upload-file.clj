#!/usr/bin/env bb

(require '[babashka.curl :as curl]
         '[cheshire.core :as json]
         '[clojure.java.io :as io])

(when (not (= 2 (count *command-line-args*)))
  (prn :error "USAGE: <channel> <filename>")
  (System/exit 1))

(def token (slurp ".token"))
(def channel (first *command-line-args*))
(def filename (second *command-line-args*))
(def filelength (-> (io/file filename)
                    .length))

;;; get upload url
(let [resp (curl/get "https://slack.com/api/files.getUploadURLExternal"
                     {:headers {"Authorization" (format "Bearer %s" token)}
                      :form-params {"filename" filename
                                    "length" filelength}})
      _ (prn :response resp)
      _ (prn :body (:body resp))
      j (json/parse-string (:body resp))
      file-id (j "file_id")
      _ (prn :file-id file-id)
      upload-url (j "upload_url")
      _ (prn :upload-url upload-url)
      _ (curl/post upload-url {:body (io/input-stream filename)})
      resp-completed (curl/post "https://slack.com/api/files.completeUploadExternal"
                 {:headers {"Authorization" (format "Bearer %s" token)}
                  :form-params {"channel_id" channel
                                "files" (json/generate-string [{:id file-id}])}})]
  (prn :completed resp-completed)
  )

(comment
  (json/generate-string [{:id "000"}]))
