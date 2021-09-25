(ns clock.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :rgb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)})

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 51)

  (let [max-scale-h (- 1 (/ 1 12))
        max-scale-m (- 1 (/ 1 60))
        max-scale-s (- 1 (/ 1 60))

        h (q/map-range
           (if (> (q/hour) 12) (- (q/hour) 12) (q/hour))
           0 11
           0 max-scale-h)
        m (q/map-range
           (q/minute)
           0 59
           0 max-scale-m)
        s (q/map-range
           (q/seconds)
           0 59
           0 max-scale-s)

        h-a (* q/TWO-PI h)
        m-a (* q/TWO-PI m)
        s-a (* q/TWO-PI s)]

    (q/stroke-weight 8)
    (q/no-fill)

    (let [halfw (/ (q/width) 2)
          halfh (/ (q/height) 2)]
      
      (q/with-translation [halfw halfh]

        (q/with-rotation [(* -1 q/HALF-PI)]
        
          (q/stroke 255 100 150)
          (q/with-rotation [h-a]
            (q/line 0 0 60 0))
          (q/arc 0 0 400 400 0 h-a)

          (q/stroke 150 100 255)
          (q/with-rotation [m-a]
            (q/line 0 0 100 0))
          (q/arc 0 0 360 360 0 m-a)

          (q/stroke 150 255 100)
          (q/with-rotation [s-a]
            (q/line 0 0 160 0))
          (q/arc 0 0 320 320 0 s-a)
          )
      ))
    ))


; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch clock
    :host "clock"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
