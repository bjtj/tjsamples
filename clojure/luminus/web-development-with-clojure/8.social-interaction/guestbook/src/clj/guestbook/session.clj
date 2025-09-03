(ns guestbook.session
  (:require [ring-ttl-session.core :refer [ttl-memory-store]]))

(defonce store (ttl-memory-store (* 60 30)))

(defn ring-req->session-key
  [req]
  (get-in req [:cookies "ring-session" :value]))

(defn read-session
  [req]
  (.read-session store (ring-req->session-key req)))

(defn write-session
  [req v]
  (.write-session store (ring-req->session-key req) v))

