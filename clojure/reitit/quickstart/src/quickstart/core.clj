(ns quickstart.core
  (:require [reitit.http :as http]
            [reitit.ring :as ring]
            [reitit.interceptor.sieppari]
            [sieppari.async.core-async] ;; needed for core.async
            [sieppari.async.manifold]   ;; needed for manifold
            [ring.util.response :as res]
            [ring.adapter.jetty :as jetty]
            [muuntaja.interceptor]
            [clojure.core.async :as a]
            [manifold.deferred :as d]
            [promesa.core :as p]
            [hiccup.core :as h]
            [clojure.java.browse :refer [browse-url]])
  (:gen-class))


(defn interceptor
  [f x]
  {:enter (fn [ctx] (f (update-in ctx [:request :via] (fnil conj []) {:enter x})))
   :leave (fn [ctx] (f (update-in ctx [:response :body] conj {:leave x})))})

(defn handler
  [f]
  (fn [{:keys [via]}]
    (f {:status 200,
        :body (conj via :handler)})))

(def <sync> identity)
(def <future> #(future %))
(def <async> #(a/go %))
(def <deferred> d/success-deferred)
(def <promesa> p/promise)

(defn index-handler
  [{:keys [] :as req}]
  (res/response
   (h/html
       [:div
        [:h2 "Welcome"]
        [:ul
         [:li
          [:a {:href "/api/sync"} "sync"]]
         [:li
          [:a {:href "/api/future"} "future"]]
         [:li
          [:a {:href "/api/async"} "async"]]
         [:li
          [:a {:href "/api/deferred"} "deferred"]]
         [:li
          [:a {:href "/api/promesa"} "promesa"]]]
        [:pre {:style "white-space: pre-wrap;"}
         (pr-str req)]])))

(def app
  (http/ring-handler
   (http/router
    [["/"
      {:get {:handler index-handler}}]
     ["/api"
      {:interceptors [(interceptor <sync> :api)]}

      ["/sync"
       {:interceptors [(interceptor <sync> :sync)]
        :get {:interceptors [(interceptor <sync> :get)]
              :handler (handler <sync>)}}]

      ["/future"
       {:interceptors [(interceptor <future> :future)]
        :get {:interceptors [(interceptor <future> :get)]
              :handler (handler <future>)}}]

      ["/async"
       {:interceptors [(interceptor <async> :async)]
        :get {:interceptors [(interceptor <async> :get)]
              :handler (handler <async>)}}]

      ["/deferred"
       {:interceptors [(interceptor <deferred> :deferred)]
        :get {:interceptors [(interceptor <deferred> :get)]
              :handler (handler <deferred>)}}]

      ["/promesa"
       {:interceptors [(interceptor <promesa> :promesa)]
        :get {:interceptors [(interceptor <promesa> :get)]
              :handler (handler <promesa>)}}]]])
   (ring/create-default-handler)
   {:executor reitit.interceptor.sieppari/executor
    :interceptors [(muuntaja.interceptor/format-interceptor)]}))

(defonce server (atom nil))

(defn start
  []
  (if (some? @server)
    (println "server is already started...")
    (do 
      (reset! server
              (jetty/run-jetty #'app
                               {:port 3000
                                :join? false
                                :async? true}))
      (println "server running in port 3000"))))

(defn stop
  []
  (when (some? @server)
    (.stop @server)
    (reset! server nil)))

(defn restart
  []
  (stop)
  (start))


(defn -main
  [& args]
  (start)
  (browse-url "http://localhost:3000"))


(comment

  (res/response (h/html
                    [:div
                     [:h2 "Welcome"]
                     [:ul
                      [:li
                       [:a {:href "/api/sync"} "sync"]]
                      [:li
                       [:a {:href "/api/future"} "future"]]
                      [:li
                       [:a {:href "/api/async"} "async"]]
                      [:li
                       [:a {:href "/api/deferred"} "deferred"]]
                      [:li
                       [:a {:href "/api/promesa"} "promesa"]]]])))
