(ns jwt-auth.core
  (:gen-class)
  (:require [reitit.ring :as ring]
            [reitit.ring.middleware.parameters :refer [parameters-middleware]]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.params :refer [wrap-params]]
            [ring.util.response :as res]
            [buddy.auth :refer [authenticated?]]
            [buddy.auth.backends.token :refer [jws-backend]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [buddy.sign.jwt :as jwt]
            [clojure.data.json :as json]))

(def secret "my-super-secret")

(defn generate-token
  "Sample JWT token generator (for testing)"
  [user-id]
  (jwt/sign {:user-id user-id} secret))

;;; Auth backend for buddy
(def auth-backend
  (jws-backend {:secret secret
                :options {:alg :hs256}
                ;; https://github.com/funcool/buddy-auth/issues/84#issuecomment-959934206
                ;; > you can switch to `"Bearer"` instead of the default `"Token"`
                :token-name "Bearer"}))

(defn wrap-authn
  "middleware to require authentication"
  [handler]
  (wrap-authentication handler auth-backend))

(defn wrap-authz
  "middleware to require authorization"
  [handler]
  (wrap-authorization handler auth-backend))

(defn wrap-verify-auth
  [handler]
  (fn [req]
    (if (authenticated? req) ; identity check
      (handler req)
      (-> {:error "unauthorized"}
          (res/response)
          (res/status 401)))))

(def app
  (ring/ring-handler
   (ring/router
    [["/"
      {:get (fn [_]
              (-> (str "<div><a href=\"login\">login</a></div>"
                       "<div>"
                       "  <input name=\"token\" placeholder=\"token...\" />"
                       ;; fetch with header "Authorization: Bearer <token>"
                       "  <button onclick=\"fetch('/private', {method: 'get', headers: {'Authorization': `Bearer ${document.querySelector('[name=token]').value}`}}).then(resp => resp.text()).then(text => document.querySelector('#result').innerText = text)\">private api</button></div>"
                       "<div id=\"result\"></div>")
                  (res/response)
                  (res/content-type "text/html")))}]
     ["/public"
      {:get (fn [_]
              (-> "Public route"
                  (res/response)
                  (res/content-type "text/html")))}]
     ["/login"
      {:get (fn [_]
              (-> (str "<div><a href=\"/\">home</a></div>"
                       "<form method=\"post\">"
                       "<input name=\"username\" placeholder=\"username...\"/>"
                       "<button>submit</button>"
                       "</form>")
                  (res/response)
                  (res/content-type "text/html")))
       :post (fn [{:keys [params]}]
               ;; just a dummy login for demonstration
               (let [username (params "username")
                     token (generate-token username)]
                 (-> (json/write-str {:username username :token token})
                     (res/response)
                     (res/content-type "application/json"))))}]
     ["/private"
      {:get {:middleware [wrap-authn wrap-authz wrap-verify-auth]
             :handler (fn [{:keys [identity] :as req}]
                        (-> (pr-str :AUTHORIZED! :identity identity)
                            (res/response)
                            (res/content-type "text/plain")))}}]])
   (ring/create-default-handler)
   {:middleware [parameters-middleware]}))

(defonce server (atom nil))

(defn stop
  "stop server"
  []
  (when-let [s @server]
    (prn :stop-server!)
    (.stop s))
  (reset! server nil))

(defn start
  "start server"
  []
  (if-let [s @server]
    (prn :already-started s)
    (reset! server (jetty/run-jetty #'app {:port 3000 :join? false}))))

(defn restart
  "restart server"
  []
  (stop)
  (start))

(comment
  (json/write-str {:type "hello"})
  (stop)
  (start)
  (restart)

  ;; -- end of comment --
  )

(defn -main
  [& args]
  (jetty/run-jetty #'app {:port 5000 :join? true}))
