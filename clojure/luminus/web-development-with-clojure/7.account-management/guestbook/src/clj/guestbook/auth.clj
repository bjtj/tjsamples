(ns guestbook.auth
  (:require [buddy.hashers :as hashers]
            [next.jdbc :as jdbc]
            [guestbook.db.core :as db]))

(defn identity->roles
  ""
  [identity]
  (cond-> #{:any}
    (some? identity) (conj :authenticated)))

(def roles
  {:message/create! #{:authenticated}
   :author/get #{:any}
   :account/set-profile! #{:authenticated}
   :auth/login #{:any}
   :auth/logout #{:any}
   :account/register #{:any}
   :session/get #{:any}
   :messages/list #{:any}
   :swagger/swagger #{:any}
   :media/get #{:any}
   :media/upload #{:authenticated}})

(defn create-user!
  ""
  [login password]
  (jdbc/with-transaction [t-conn db/*db*]
    (if-not (empty? (db/get-user-for-auth* t-conn {:login login}))
      (throw (ex-info "User already exists!"
                      {:guestbook/error-id ::duplicate-user
                       :error "User already exists!"}))
      (db/create-user!* t-conn
                        {:login login
                         :password (hashers/derive password)}))))

(defn authenticate-user
  ""
  [login password]
  (let [{hashed :password :as user} (db/get-user-for-auth* {:login login})]
    (when (hashers/check password hashed)
        (dissoc user :password))))
