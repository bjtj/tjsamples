# Hosted on the JVM #

<https://clojure.org/about/jvm_hosted>

Clojure is designed to be a hosted language, sharing the JVM type system, GC, threads etc. It compiles all functions to JVM bytecode. Clojure is a great Java library consumer, offering the dot-target-member notation for calls to Java. Class names can be referenced in full, or as non-qualified names after being imported. Clojure supports the dynamic implementation of Java interfaces and classes using reify and proxy:
