;; -------------------------------------
;; A Global, Stable Place for Your Stuff
;; -------------------------------------

(def title "Emma")

;; Everyone's favorite universal constant.
(def PI 3.14)

;; Length of a standard book ID.
(def ISBN-LENGTH 13)

;; Company names are more or less constant.
(def COMPANY-NAME "Blotts Books")

(defn book-description
  ""
  [book]
  (str (:title book)
       "Written by "
       (:author book)))


;; Length of a standard book ID.
(def ISBN-LENGTH 13)

;; Before 2007 ISBNs were 10 characters long.
(def OLD-ISBN-LENGTH 10)

(def isbn-lengths [OLD-ISBN-LENGTH ISBN-LENGTH])

(defn valid-isbn
  ""
  [isbn]
  (or (= (count isbn) OLD-ISBN-LENGTH)
      (= (count isbn) ISBN-LENGTH)))

;; Symbols Are Things

(def author "Austen")

'author                                 ; The symbol author, not the string "Austen"
'title                                  ; A symbol that starts with a 't'.

(str 'author)                           ; The string "author".


(= 'author 'some-other-symbol)          ; Nope
(= 'title 'title)                       ; Yup

;; Bindings Are Things Too

(def author "Austen")                   ; Make a var

#'author                                ; Get at the var for author -> "Austen".

(def the-var #'author)                  ; Grab the var.

(.get the-var)                          ; Get the value of the var: "Austen"
(.-sym the-var)                         ; Get the symbol of the var: author

;; Varying Your Vars

(def PI 3.14)

(defn compute-area
  ""
  [diameter]
  (* PI diameter diameter))

(def PI 3.14159)

;; (defn compute-area
;;   ""
;;   [diameter]
;;   (* PI radius (/ diameter 2.0)))


(def debug-enabled false)

(defn debug
  ""
  [msg]
  (if debug-enabled
      (println msg)
      )
  )

;; (binding [debug-enabled true]
;;   (debug "Calling that darned function")
;;   (some-troublesome-function-that-needs-logging)
;;   (debug "Back from the darned function"))


;; Make debug-enabled a dynamic var.

(def ^:dynamic debug-enabled false)


(def ^:dynamic *debug-enabled* false)

(defn debug
  ""
  [msg]
  (if *debug-enabled*
      (println msg)
      )
  )

;; (binding [*debug-enabled* true]
;;   (debug "Calling the darned function")
;;   (some-troublesome-function-that-needs-logging)
;;   (debug "Back from that darned function"))


;; (binding [*print-length* nil]
;;   (run-your_code))

(def books ["Emma" "2001" "Jaws" "Oliver Twist"])

(set! *print-length* 2)


;; user> books
;; ["Emma" "2001" ...]

;; user> (+ 2 2)
;; 4
;; user> *1
;; 4

;; user> "Austen"
;; "Austen"
;; user> "King"
;; "King"
;; user> "Orwell"
;; "Orwell"
;; user> *3
;; "Austen"



;; user> (/ 1 0)
;; Execution error (ArithmeticException) at user/eval6466 (REPL:81).
;; Divide by zero

;; user> *e
;; #error {
;;  :cause "Divide by zero"
;;  :via
;;  [{:type java.lang.ArithmeticException
;;    :message "Divide by zero"
;;    :at [clojure.lang.Numbers divide ...]}]
;;  :trace
;;  [[clojure.lang.Numbers divide ...]
;;   [clojure.lang.Numbers divide ...]
;;   [user$eval6466 invokeStatic ...]
;;   [user$eval6466 invoke ...]
;;   [clojure.lang.Compiler eval ...]
;;   [clojure.lang.Compiler eval ...]
;;   [clojure.core$eval invokeStatic ...]
;;   [clojure.core$eval invoke ...]
;;   [nrepl.middleware.interruptible_eval$evaluate$fn__10417$fn__10418 invoke ...]
;;   [clojure.lang.AFn applyToHelper ...]
;;   [clojure.lang.AFn applyTo ...]
;;   [clojure.core$apply invokeStatic ...]
;;   [clojure.core$with_bindings_STAR_ invokeStatic ...]
;;   [clojure.core$with_bindings_STAR_ doInvoke ...]
;;   [clojure.lang.RestFn invoke ...]
;;   [nrepl.middleware.interruptible_eval$evaluate$fn__10417 invoke ...]
;;   [clojure.main$repl$read_eval_print__9086$fn__9089 invoke ...]
;;   [clojure.main$repl$read_eval_print__9086 invoke ...]
;;   [clojure.main$repl$fn__9095 invoke ...]
;;   [clojure.main$repl invokeStatic ...]
;;   [clojure.main$repl doInvoke ...]
;;   [clojure.lang.RestFn invoke ...]
;;   [nrepl.middleware.interruptible_eval$evaluate invokeStatic ...]
;;   [nrepl.middleware.interruptible_eval$evaluate invoke ...]
;;   [nrepl.middleware.interruptible_eval$interruptible_eval$fn__10448$fn__10452 invoke ...]
;;   [clojure.lang.AFn run ...]
;;   [nrepl.middleware.session$session_exec$main_loop__10511$fn__10515 invoke ...]
;;   [nrepl.middleware.session$session_exec$main_loop__10511 invoke ...]
;;   [clojure.lang.AFn run ...]
;;   [java.lang.Thread run ...]]}
;; user> 
