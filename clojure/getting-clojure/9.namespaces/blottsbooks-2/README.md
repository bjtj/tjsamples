```
$ lein repl
Retrieving korma/korma/0.4.0/korma-0.4.0.pom from clojars
Retrieving c3p0/c3p0/0.9.1.2/c3p0-0.9.1.2.pom from central
Retrieving org/clojure/java.jdbc/0.3.5/java.jdbc-0.3.5.pom from central
Retrieving org/clojure/java.jdbc/0.3.5/java.jdbc-0.3.5.jar from central
Retrieving c3p0/c3p0/0.9.1.2/c3p0-0.9.1.2.jar from central
Retrieving korma/korma/0.4.0/korma-0.4.0.jar from clojars
nREPL server started on port 61689 on host 127.0.0.1 - nrepl://127.0.0.1:61689
REPL-y 0.4.4, nREPL 0.8.3
Clojure 1.10.1
Java HotSpot(TM) 64-Bit Server VM 16.0.2+7-67
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
 Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
 Results: Stored in vars *1, *2, *3, an exception in *e

blottsbooks-2.core=> (require '[korma.db :as db])
nil
blottsbooks-2.core=> (require '[blottsbooks-2.pricing :as pricing])
nil
blottsbooks-2.core=> (pricing/compute-discount-price {:title "Emma" :price 20.0})
17.0
blottsbooks-2.core=> (ns-unmap 'blottsbooks-2.pricing 'discount-price)
nil
```
