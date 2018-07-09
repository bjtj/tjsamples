;; http://www.sbcl.org/manual/#Output-prefixing-character-stream

(defclass wrapped-stream (fundamental-stream)
  ((stream :initarg :stream :reader stream-of)))

(defmethod stream-element-type ((stream wrapped-stream))
  (stream-element-type (stream-of stream)))

(defmethod close ((stream wrapped-stream) &key abort)
  (close (stream-of stream) :abort abort))

(defclass wrapped-character-output-stream
  (wrapped-stream fundamental-character-output-stream)
  ((col-index :initform 0 :accessor col-index-of)))

(defmethod stream-line-column ((stream wrapped-character-output-stream))
  (col-index-of stream))

(defmethod stream-write-char ((stream wrapped-character-output-stream)
							  char)
  (with-accessors ((inner-stream stream-of) (cols col-index-of)) stream
				  (write-char char inner-stream)
				  (if (char= char #\Newline)
					  (setf cols 0)
					(incf cols))))

(defclass prefixed-character-output-stream
  (wrapped-character-output-stream)
  ((prefix :initarg :prefix :reader prefix-of)))

(defgeneric write-prefix (prefix stream)
  (:method ((prefix string) stream) (write-string prefix stream))
  (:method ((prefix function) stream) (funcall prefix stream)))

(defmethod stream-write-char ((stream prefixed-character-output-stream)
						   char)
		(with-accessors ((inner-stream stream-of) (cols col-index-of)
						 (prefix prefix-of)) stream
						 (when (zerop cols)
						   (write-prefix prefix inner-stream))
						 (call-next-method)))

(flet ((format-timestamp (stream)
						 (apply #'format stream "[~2@*~2,' D:~1@*~2,'0D:~0@*~2,'0D] "
								(multiple-value-list (get-decoded-time)))))
	  (let ((output (make-instance 'prefixed-character-output-stream
								   :stream *standard-output*
								   :prefix #'format-timestamp)))
		(loop for string in '("abc" "def" "ghi") do
			  (write-line string output)
			  (sleep 1))))
