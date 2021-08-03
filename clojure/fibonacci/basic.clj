;; https://blog.klipse.tech/clojurescript/2016/04/19/fibonacci.html

(def fib-seq-seq
  ((fn fib [a b] 
     (lazy-seq (cons a (fib b (+ a b)))))
   0 1))

(take 30 fib-seq-seq)
