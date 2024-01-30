(ql:quickload "clop")


(defparameter +toml-text+ "
[server]
port = 5000
print-access-log = false
")

(defparameter *result* (clop:parse +toml-text+))
(print *result*)
