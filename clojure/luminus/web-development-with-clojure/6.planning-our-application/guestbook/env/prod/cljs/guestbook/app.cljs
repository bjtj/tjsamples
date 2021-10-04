(ns guestbook.app
  (:require [guestbook.core :as core]))

(set! *print-fn* (fn [& _]))

(core/init!)
