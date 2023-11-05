# Compiling Common Lisp to an executable #

<https://stackoverflow.com/a/19653150/5676460q>

``` common-lisp
(defun main ()
    (format t "Hello, world!~%"))

(sb-ext:save-lisp-and-die "hello-world.exe"
:executable t
:toplevel 'main)
```

