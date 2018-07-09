;; http://www.sbcl.org/manual/#Character-counting-input-stream

(defclass wrapped-stream (fundamental-stream)
  ((stream :initarg :stream :reader stream-of)))

(defmethod stream-element-type ((stream wrapped-stream))
  (stream-element-type (stream-of stream)))

(defmethod close ((stream wrapped-stream) &key abort)
  (close (stream-of stream) :abort abort))

(defclass wrapped-character-input-stream
  (wrapped-stream fundamental-character-input-stream)
  ())

(defmethod stream-read-char ((stream wrapped-character-input-stream))
  (read-char (stream-of stream) nil :eof))

(defmethod stream-unread-char ((stream wrapped-character-input-stream)
							   char)
  (unread-char char (stream-of stream)))

(defclass counting-character-input-stream
  (wrapped-character-input-stream)
  ((char-count :initform 1 :accessor char-count-of)
   (line-count :initform 1 :accessor line-count-of)
   (col-count :initform 1 :accessor col-count-of)
   (prev-col-count :initform 1 :accessor prev-col-count-of)))

(defmethod stream-read-char ((stream counting-character-input-stream))
  (with-accessors ((inner-stream stream-of) (chars char-count-of)
				   (lines line-count-of) (cols col-count-of)
				   (prev prev-col-count-of)) stream
				   (let ((char (call-next-method)))
					 (cond ((eql char :eof)
							:eof)
						   ((char= char #\Newline)
							(incf lines)
							(incf chars)
							(setf prev cols)
							(setf cols 1)
							char)
						   (t
							(incf chars)
							(incf cols)
							char)))))

(defmethod stream-unread-char ((stream counting-character-input-stream)
							   char)
  (with-accessors ((inner-stream stream-of) (chars char-count-of)
				   (lines line-count-of) (cols col-count-of)
				   (prev prev-col-count-of)) stream
				   (cond ((char= char #\Newline)
						  (decf lines)
						  (decf chars)
						  (setf cols prev))
						 (t
						  (decf chars)
						  (decf cols)
						  char))
				   (call-next-method)))

(with-input-from-string (input "1 2
 3 :foo  ")
						(let ((counted-stream (make-instance 'counting-character-input-stream
															 :stream input)))
						  (loop for thing = (read counted-stream) while thing
								unless (numberp thing) do
								(error "Non-number ~S (line ~D, column ~D)" thing
									   (line-count-of counted-stream)
									   (- (col-count-of counted-stream)
										  (length (format nil "~S" thing))))
								end
								do (print thing))))



