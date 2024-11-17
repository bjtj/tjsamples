(ns jcodec-sample.jcodec-sample
  (:import (org.jcodec.api FrameGrab)
           (org.jcodec.common.io NIOUtils))
  (:require [clojure.java.io :as io])
  (:gen-class))

(defn get-video-duration-jcodec
  "Extracts video duration using JCodec."
  [video-file]
  (-> video-file
      (io/file) 
      (NIOUtils/readableChannel)
      (FrameGrab/createFrameGrab)
      (.. getVideoTrack getMeta getTotalDuration)))

(defn -main
  [& args]
  (let [filepath (first args)]
    (prn :filepath filepath)
    (prn :duration-seconds (get-video-duration-jcodec filepath))))
