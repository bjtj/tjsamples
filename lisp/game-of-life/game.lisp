;; (load "game.lisp")
;; (start 5 5)
;; (gen-next)
;; (gen-next)
;; ...


(defparameter *width* 80)
(defparameter *height* 10)
(defparameter *cellnum* (* *width* *height*))
(defparameter *cur-grid* '())

(defun cell2letter (cell)
  (if cell "x" "-"))

(defun draw ()
  (loop
    for i from 0
    for x in (coerce *cur-grid* 'list)
    do (progn
         (when (= (mod i *width*) 0)
           (fresh-line))
         (princ (cell2letter x))
         nil)))

(defun gen-grid (width height)
  (make-array (* width height)
              :initial-contents (loop
                                  for n below (* width height)
                                  collect (if (= (random 2) 1) t nil))))

(defun neighbors (pos)
  (let ((up (- pos *width*))
        (down (+ pos *width*)))
    (loop for p in (append (list up down)
                           (unless (zerop (mod pos *width*))
                             (list (1- up) (1- pos) (1- down)))
                           (unless (zerop (mod (1+ pos) *width*))
                             (list (1+ up) (1+ pos) (1+ down))))
          when (and (>= p 0) (< p *cellnum*))
            collect p)))

(defun count-neighbors (pos)
  (let ((neighbor-cells
          (mapcar (lambda (p) (aref *cur-grid* p)) (neighbors pos))))
    (reduce
     (lambda (acc c) (if c (1+ acc) acc))
     neighbor-cells
     :initial-value 0)))

(defun will-alive (cell neighbor-count)
  (cond ((< neighbor-count 2) nil)
        ((and (= neighbor-count 2) cell) t)
        ((= neighbor-count 3) t)
        (t nil)))


(defun start (width height)
  (setf *width* width)
  (setf *height* height)
  (setf *cellnum* (* *width* *height*))
  (setf *cur-grid* (gen-grid width height))
  (draw))

(defun update ()
  (make-array *cellnum*
              :initial-contents (loop for i from 0
                                      for c in (coerce *cur-grid* 'list)
                                      collect (will-alive c (count-neighbors i)))))

(defun gen-next ()
  (setf *cur-grid* (update))
  (draw))
