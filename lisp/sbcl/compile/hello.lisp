(defun main ()
  (format t "Hello, world!~%"))

(sb-ext:save-lisp-and-die "hello.exe"
                          :executable t
                          :toplevel 'main)
