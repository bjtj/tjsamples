;; The Trouble with Maps

;; (let [watson-1 (get-watson-1)
;;       watson-2 (get-watson-2)]
;;   ;; Do something with our watsons...
;;   )

;; A fictional character.
(defn get-watson-1
  ""
  []
  {:name "John Watson"
   :apperas-in "Sign of the Four"
   :author "Doyle"})

(defn get-watson-2
  ""
  []
  {:cpu "Power7" :no-cpus 2880 :storage-gb 4000})

;; Striking a More Specific Bargain with Records

(defrecord FictionalCharacter[name appears-in author])

(def watson (->FictionalCharacter "John Watson" "Sign of the Four" "Doyle"))

(def elizabeth (map->FictionalCharacter
                {:name "Elizabeth Bennet"
                 :appears-in "Pride & Prejudice"
                 :author "Austen"}))

;; Records Are Maps
;; ----------------

(:name elizabeth)
(:appears-in watson)

(count elizabeth)
(keys watson)

(def specific-watson (assoc watson :appears-in "Sign of the Four"))

(def more-about-watson (assoc watson :address "221B Baker Street"))

;; The Record Advange
;; ------------------

(def irene {:name "Irene Adler"
            :Appers-in "A Scandal in Bohemia"
            :author "Doyle"})

(:name watson)

(:name irene)

(defrecord FictionalCharacter[name appears-in author])
(defrecord SuperComputer [cpu no-cpus storage-gb])

;; And create some records.

(def watson-1 (->FictionalCharacter
               "John Watson"
               "Sign of the Four"
               "Doyle"))

(def watson-2 (->SuperComputer "Power7" 2880 4000))

(class watson-1)
(class watson-2)

(instance? FictionalCharacter watson-1)
(instance? SuperComputer watson-2)

;; Don't do this!
;; (defn process-thing
;;   ""
;;   [x]
;;   (if (= (instance? FictionalCharacter x))
;;     (process-fictional-character x)
;;     (process-computer x)
;;       )
;; )

;; Protocols
;; ---------

(defrecord Employee [first-name last-name department])

(def alice (->Employee "Alice" "Smith" "Engineering"))

(defprotocol Person
  (full-name [this])
  (greeting [this msg])
  (description [this]))

(defrecord FictionalCharacter[name appears-in author]
  Person
  (full-name [this] (:name this))
  (greeting [this msg] (str msg " " (:name this)))
  (description [this]
    (str (:name this) " is a character in " (:appears-in this))))

(defrecord Employee [first-name last-name department]
  Person
  (full-name [this] (str first-name " " last-name))
  (greeting [this msg] (str msg " " (:first-name this)))
  (description [this]
    (str (:first-name this) " works in " (:department this))))


