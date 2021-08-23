;; Pry Open Your Data
;; ------------------

(def artists [:monet :austen])

(let [painter (first artists)
      novelist (second artists)]
  (println "The painter is:" painter
           "and the novelist is" novelist))



(let [[painter novelist] artists]
  (println "The painter is:" painter
           "and the novelist is:" novelist)
  )

(def artists [:monet :austen :beethoven :dickinson])

(let [[painter novelist composer poet] artists]
  (println "The painter is" painter)
  (println "The novelist is" novelist)
  (println "The composer is" composer)
  (println "The poet is" poet))

;; Getting Less than Everything
;; ----------------------------

(let [[painter novelist composer] artists]
  (println "The painter is" painter)
  (println "The novelist is" novelist)
  (println "The composer is" composer)
  )

(let [[dummy dummy composer poet] artists]
  (println "The composer is" composer)
  (println "The poet is" poet)
  )

(let [[_ _ composer poet] artists]
  (println "The composer is" composer)
  (println "The poet is" poet)
  )

(def pairs [[:monet :austen] [:beethoven :dickinson]])

(let [[[painter] [composer]] pairs]
  (println "The painter is" painter)
  (println "The composer is" composer)
  )

(let [[[painter] [_ poet]] pairs]
  (println "The painter is" painter)
  (println "The poet is" poet)
  )

;; Destructuring in Sequence
;; -------------------------

(def artist-list '(:monet :austen :beethoven :dickinson))

(let [[painter novelist composer] artist-list]
  (println "The painter is" painter)
  (println "The novelist is" novelist)
  (println "The composer is" composer)
  )

(let [[c1 c2 c3 c4] "Jane"]
  (println "How do you spell Jane?")
  (println c1)
  (println c2)
  (println c3)
  (println c4)
  )

;; Destructuring Function Arguments

(defn artist-description
  ""
  [[novelist poet]]
  (str "The novelist is " novelist " and the poet is " poet))

(artist-description [:austen :dickinson])

(defn artist-description
  ""
  [shout [novelist poet]]
  (let [msg (str "Novelist is " novelist
                 "and the poet is " poet)]
    (if shout (.toUpperCase msg) msg)))

;; Digging into Maps
;; -----------------

(def artist-map {:painter :monet  :novelist :austen})

(let [{painter :painter writer :novelist} artist-map]
  (println "The painter is" painter)
  (println "The novelist is" writer)
  )

(let [{writer :novelist painter :painter} artist-map]
  (println "The painter is" painter)
  (println "The novelist is" writer)
  )

;; Diving into Nested Maps
;; -----------------------

(def austen {:name "Jane Austen"
             :parents {:father "George" :mother "Cassandra"}
             :dates {:born 1775 :died 1817}})

(let [{{dad :father mom :mother} :parents} austen]
  (println "Jane Austen's dad's name was" dad)
  (println "Jane Austen's mom's name was" mom)
  )

;; The Final Frontier: Mixing and Matching

(def author {:name "Jane Austen"
             :books [{:title "Sense and Sensibilty" :published 1811}
                     {:title "Emma" :published 1815}]})

(let [{name :name [_ book] :books} author]
  (println "The author is" name)
  (println "One of the author's books is" book)
  )

(def authors [{:name "Jane Austen" :born 1775}
              {:name "Charles Dickens" :born 1812}])

(let [[{dob-1 :born} {dob-2 :born}] authors]
  (println "One author was born in" dob-1)
  (println "The other author was born in" dob-2)
  )

;; Going Further
;; -------------

{:name "Romeo" :age 16 :gender :male}

(defn character-desc
  ""
  [{name :name age :age gender :gender}]
  (str "Name: " name " age: " age " gender: " gender))

(defn character-desc
  ""
  [{:keys [name age gender]}]
  (str "Name: " name " age: " age " gender: " gender))

(defn character-desc
  ""
  [{:keys [name gender] age-in-years :age}]
  (str "Name: " name " age: " age-in-years " gender: " gender))

(defn add-greeting
  ""
  [character]
  (let [{:keys [name age]} character]
    (assoc character
           :greeting
           (str "Hello, my name is " name " and I am " age "."))
    )
  )

(defn add-greeting
  ""
  [{:keys [name age] :as character}]
  (assoc character
         :greeting
         (str "Hello, my name is " name " and I am " age ".")))
