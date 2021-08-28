```
$ lein repl
Retrieving com/google/code/gson/gson/2.8.0/gson-2.8.0.pom from central
Retrieving com/google/code/gson/gson-parent/2.8.0/gson-parent-2.8.0.pom from central
Retrieving com/google/code/gson/gson/2.8.0/gson-2.8.0.jar from central
nREPL server started on port 61808 on host 127.0.0.1 - nrepl://127.0.0.1:61808
REPL-y 0.4.4, nREPL 0.8.3
Clojure 1.10.1
Java HotSpot(TM) 64-Bit Server VM 16.0.2+7-67
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
 Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
 Results: Stored in vars *1, *2, *3, an exception in *e

exploregson.core=> (import com.google.gson.Gson)
com.google.gson.Gson
exploregson.core=> (def gson-obj (Gson.))
#'exploregson.core/gson-obj
exploregson.core=> (.toJson gson-obj 44)
"44"
exploregson.core=> (.toJson gson-obj {:title "1984" :author "Orwell"})
"{\":title\":\"1984\",\":author\":\"Orwell\"}"
exploregson.core=> 
```
