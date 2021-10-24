(ns guestbook.ajax
  (:require [ajax.core :refer [GET POST]]
            [re-frame.core :as rf]))

(rf/reg-fx
 :ajax/get
 (fn [{:keys [url success-event error-event success-path]}]
   (GET url
        (cond-> {:headers {"Accept" "application/transit+json"}}
          success-event (assoc :handler
                               #(rf/dispatch
                                 (conj success-event
                                       (if success-path
                                         (get-in % success-path)
                                         %))))
          error-event (assoc :error-handler
                             #(rf/dispatch
                               (conj error-event %)))))))

(rf/reg-fx
 :ajax/post
 (fn [{:keys [url success-event error-event success-path params]}]
   (POST url
         (cond-> {:headers {"Accept" "application/transit+json"}}
           params (assoc :params params)
           success-event (assoc :handler
                                #(rf/dispatch
                                  (conj success-event
                                        (if success-path
                                          (get-in % success-path)
                                          %))))
           error-event (assoc :error-handler
                              #(rf/dispatch
                                (conj error-event %)))))))

(rf/reg-fx
 :ajax/upload-media!
 (fn [{:keys [url success-event files handler]}]
   (let [form-data (js/FormData.)]
     (doseq [[k v] files]
       (when (some? v)
         (.append form-data (name k) v)))
     (POST url {:body form-data
                :handler handler}))))
