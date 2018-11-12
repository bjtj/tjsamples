# caveman2

* http://8arrow.org/caveman/


```
;; using sbcl
(ql:quickload :caveman2)
(caveman2:make-project #p"hello-web" :author "tj")
; place the project folder to '~/quicklisp/local-projects'
(ql:quickload :hello-web)
(hello-web:start :port 8080)
; (hello-web:start :server :hunchentoot :port 8080)
(hello-web:stop)
```
