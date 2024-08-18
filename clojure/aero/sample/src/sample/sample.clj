(ns sample.sample
  (:gen-class)
  (:require [aero.core :refer [read-config] :as aero]
            [clojure.java.io :as io]
            [clojure.string :as str]))

(defn parse-env-var [line]
  "https://github.com/jacobobryant/biff/blob/75fd9d733c95e42b06c8d1b0eed9bc5f326c6f1c/libs/config/src/com/biffweb/config.clj#L40"
  (let [line (str/trim line)
        [_ _ k v] (re-matches #"^\s*(export\s+)?([\w.\-]+)\s*=\s*(['][^']*[']|[\"][^\"]*[\"]|[^#]*)?\s*(#.*)?$"
                              line)]
    (when-not (or (str/starts-with? line "#")
                  (str/starts-with? line "////")
                  (empty? v))
      (let [v (str/trim v)
            v (if (or (re-matches #"^\".*\"$" v)
                      (re-matches #"^'.*'$" v))
                (subs v 1 (dec (count v)))
                v)]
        [k v]))))

(defn get-env []
  (reduce into
          {}
          [(some->> (slurp "config.env")
                    str/split-lines
                    (keep parse-env-var))
           (System/getenv)
           (System/getProperties)]))

(defmethod aero/reader 'my/env
  [{:keys [profile my.aero/env] :as opts} _ value]
  (not-empty (get env (str value))))

(defn -main
  "main"
  [& args]
  (prn :read-config (read-config (io/resource "config.edn")))

  (let [env (get-env)]
    (prn :read-config-with-env (read-config (io/resource "config.edn") {:my.aero/env env}))))
