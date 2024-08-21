(ns sample.sample
  (:gen-class)
  (:require [chime.core :as chime])
  (:import (java.time Instant Duration LocalTime ZonedDateTime ZoneId Period DayOfWeek)))

(defn sample1
  "usage1"
  [opts]
  (let [now (Instant/now)]
    (chime/chime-at [(.plusSeconds now 2)
                     (.plusSeconds now 4)]
                    (fn [time]
                      (println "Chiming at" time)))))

(defn sample2
  "usage2"
  [opts]
  (let [now (Instant/now)]
    (chime/chime-at [(.plusSeconds now 2)
                     (.plusSeconds now 4)]

                    (fn [time]
                      (println "Chiming at" time))

                    {:on-finished (fn []
                                    (println "Schedule finished."))})))

(defn sample3
  "Recurring schedules -- ex1 (no output)"
  [opts]
  (-> (chime/periodic-seq (Instant/now) (Duration/ofMinutes 5))
      rest))

(defn sample4
  "Recurring schedules -- ex2 (no output)"
  [opts]
  (chime/periodic-seq (-> (LocalTime/of 20 0 0)
                          (.adjustInto (ZonedDateTime/now (ZoneId/of "America/New_York")))
                          .toInstant)
                      (Period/ofDays 1)))

(defn sample5
  "Recurring schedules -- ex3"
  [opts]
  (chime/chime-at (chime/periodic-seq (Instant/now) (Duration/ofSeconds 1))
                  (fn [time]
                    (println "hello"))))
