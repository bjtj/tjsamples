(ns guestbook.routes.services
  (:require
   [reitit.swagger :as swagger]
   [reitit.swagger-ui :as swagger-ui]
   [reitit.ring.coercion :as coercion]
   [reitit.coercion.spec :as spec-coercion]
   [reitit.ring.middleware.muuntaja :as muuntaja]
   [reitit.ring.middleware.exception :as exception]
   [reitit.ring.middleware.multipart :as multipart]
   [reitit.ring.middleware.parameters :as parameters]
   [guestbook.messages :as msg]
   [guestbook.middleware :as middleware]
   [guestbook.auth :as auth]
   [guestbook.auth.ring :refer [wrap-authorized get-roles-from-match]]
   [guestbook.author :as author]
   [clojure.tools.logging :as log]
   [ring.util.http-response :as response]
   [guestbook.middleware.formats :as formats]
   [spec-tools.data-spec :as ds]))

(defn service-routes
  "Service Routes"
  []
  ["/api"
   {:middleware [parameters/parameters-middleware
                 muuntaja/format-negotiate-middleware
                 muuntaja/format-response-middleware
                 exception/exception-middleware
                 muuntaja/format-request-middleware
                 coercion/coerce-response-middleware
                 coercion/coerce-request-middleware
                 multipart/multipart-middleware
                 (fn [handler]
                   (wrap-authorized
                    handler
                    (fn handle-unauthorized [req]
                      (let [route-roles (get-roles-from-match req)]
                        (log/debug
                         "Roles for route: "
                         (:uri req)
                         route-roles)
                        (log/debug "User is unauthorized!"
                                   (-> req
                                       :session
                                       :identity
                                       :roles))
                        (response/forbidden
                         {:message
                          (str "User must have one of the following roles: "
                               route-roles)})))))]
    :muuntaja formats/instance
    :coercion spec-coercion/coercion
    :swagger {:id ::api}}
   ["" {:no-doc true
        ::auth/roles (auth/roles :swagger/swagger)}
    ["/swagger.json"
     {:get (swagger/create-swagger-handler)}]
    ["/swagger-ui*"
     {:get (swagger-ui/create-swagger-ui-handler
            {:url "/api/swagger.json"})}]]
   ["/session"
    {::auth/roles (auth/roles :session/get)
     :get
     {:responses
      {200
       {:body
        {:session
         {:identity
          (ds/maybe
           {:login string?
            :created_at inst?})}}}}
      :handler
      (fn [{{:keys [identity]} :session}]
        (response/ok {:session
                      {:identity
                       (not-empty
                        (select-keys identity [:login :created_at]))}}))}}]
   ["/login"
    {::auth/roles (auth/roles :auth/login)
     :post {:parameters
            {:body
             {:login string?
              :password string?}}
            :responses
            {200
             {:body
              {:identity
               {:login string?
                :created_at inst?}}}
             401
             {:body
              {:message string?}}}
            :handler
            (fn [{{{:keys [login password]} :body} :parameters
                  session :session}]
              (if-some [user (auth/authenticate-user login password)]
                (->
                 (response/ok
                  {:identity user})
                 (assoc :session (assoc session
                                        :identity
                                        user)))
                (response/unauthorized
                 {:message "Incorrect login or password."})))}}]
   ["/register"
    {::auth/roles (auth/roles :account/register)
     :post {:parameters
            {:body
             {:login string?
              :password string?
              :confirm string?}}
            :responses
            {200
             {:body
              {:message string?}}
             400
             {:body
              {:message string?}}
             409
             {:body
              {:message string?}}}
            :handler
            (fn [{{{:keys [login password confirm]} :body} :parameters
                  session :session}]
              (if-not (= password confirm)
                (response/bad-request
                 {:message
                  "Password and Confirm do not match."})
                (try
                  (auth/create-user! login password)
                  (response/ok
                   {:message
                    "User registration successful. Please log in."})
                  (catch clojure.lang.ExceptionInfo e
                    (if (= (:guestbook/error-id (ex-data e))
                           ::auth/duplicate-user)
                      (response/conflict
                       {:message
                        "Registration failed! User with login already exists!"})
                      (throw e))))))}}]
   ["/logout"
    {::auth/roles (auth/roles :auth/logout)
     :post {:handler
            (fn [_]
              (->
               (response/ok)
               (assoc :session nil)))}}]
   ["/messages"
    {::auth/roles (auth/roles :messages/list)}
    ["" {:get
         {:responses
          {200
           {:body                       ; Data Spec for response body
            {:messages
             [{:id pos-int?
               :name string?
               :message string?
               :timestamp inst?}]}}}
          :handler
          (fn [_]
            (response/ok (msg/message-list)))}}]
    ["/by/:author"
     {:get
      {:parameters {:path {:author string?}}
       :responses
       {200
        {:body                          ; Data Spec for response body
         {:messages
          [{:id pos-int?
            :name string?
            :message string?
            :timestamp inst?}]}}}
       :handler
       (fn [{{{:keys [author]} :path} :parameters}]
         (response/ok (msg/messages-by-author author)))}}]]
   ["/message"
    {::auth/roles (auth/roles :message/create!)
     :post
     {:parameters
      {:body
       {:name string?
        :message string?}}
      :responses
      {200
       {:body map?}
       400
       {:body map?}
       500
       {:errors map?}}
      :handler
      (fn [{{params :body} :parameters
            {:keys [identity]} :session}]
        (try
          (->> (msg/save-message! identity params)
               (assoc {:status :ok} :post)
               (response/ok))
          (catch Exception e
            (let [{id :guestbook/error-id
                  errors :errors} (ex-data e)]
            (case id
              :validation
              (response/bad-request {:errors errors})
              (response/internal-server-error
               {:errors
                {:server-error ["Failed to save message!"]}}))))))}}]
   ["/author/:login"
    {::auth/roles (auth/roles :author/get)
     :get {:parameters
           {:path {:login string?}}
           :responses
           {200
            {:body map?}
            500
            {:errors map?}}
           :handler
           (fn [{{{:keys [login]} :path} :parameters}]
             (response/ok (author/get-author login)))}}]
   ["/my-account"
    ["/set-profile"
     {::auth/roles (auth/roles :account/set-profile!)
      :post {:parameters
             {:body
              {:profile map?}}
             :responses
             {200
              {:body map?}
              500
              {:errors map?}}
             :handler
             (fn [{{{:keys [profile]} :body} :parameters
                   {:keys [identity] :as session} :session}]
               (try
                 (let [identity
                       (author/set-author-profile {:login identity} profile)]
                   (update (response/ok {:success true})
                           :session
                           assoc :identity identity))
                 (catch Exception e
                   (log/error e)
                   (response/internal-server-error
                    {:errors {:server-error
                              ["Failed to set profile!"]}}))))}}]]
   ])
