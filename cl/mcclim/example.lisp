;; https://github.com/sharplispers/clx/issues/122#issuecomment-443998888
(ql:quickload :mcclim)

(in-package :common-lisp-user)

(defpackage "APP"
  (:use :clim :clim-lisp)
  (:export "APP-MAIN"))

(in-package :app)

(define-application-frame superapp ()
  ()
  (:panes
   (int :interactor :height 400 :width 600))
  (:layouts
   (default int)))

(defun app-main ()
  (run-frame-top-level (make-application-frame 'superapp)))

;; (app:app-main)
