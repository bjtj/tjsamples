(ql:quickload 'md5 :silent t)

(defun arr-to-hex (arr)
  (loop for i below (car (array-dimensions arr)) do
		(format t "~X" (aref arr i)))
  (format t "~%"))

(defparameter *sum* (md5:md5sum-string "abc"))

(arr-to-hex *sum*)
