;; https://edicl.github.io/drakma/

(ql:quickload :drakma)

(setf drakma:*header-stream* *standard-output*)

(drakma:http-request "http://lisp.org/")

(subseq (drakma:http-request "http://www.cl.cam.ac.uk/~mgk25/ucs/examples/digraphs.txt") 0 298)

(drakma:http-request "https://api.github.com/repos/edicl/drakma/git/tags/tag-does-not-exist")

(flexi-streams:octets-to-string *)

(ql:quickload :cl-ppcre)

(cl-ppcre:scan-to-strings "(?s)You have.*your data."
                          (drakma:http-request "https://www.fortify.net/cgi/ssl_2.pl"))

(cl-ppcre:scan-to-strings "<h4>.*" (drakma:http-request "http://whatsmyuseragent.com/" :user-agent :explorer))

(let ((cookie-jar (make-instance 'drakma:cookie-jar)))
  (drakma:http-request "http://www.phpsecurepages.com/test/test.php"
                       :method :post
                       :parameters '(("entered_login" . "test")
                                     ("entered_password" . "test"))
                       :cookie-jar cookie-jar)
  (drakma:http-request "http://www.phpsecurepages.com/test/test2.php"
                       :cookie-jar cookie-jar)
  (drakma:cookie-jar-cookies cookie-jar))

(let ((stream (nth-value 4 (drakma:http-request "http://www.lispworks.com/" :close nil))))
  (nth-value 2 (drakma:http-request "http://www.lispworks.com/success-stories/index.html"
                                    :stream stream)))

(ql:quickload :hunchentoot-test)

(hunchentoot:start (make-instance 'hunchentoot:easy-acceptor :port 4242))

(nth-value 1 (drakma:http-request "http://localhost:4242/hunchentoot/test/authorization.html"))

(nth-value 1 (drakma:http-request "http://localhost:4242/hunchentoot/test/authorization.html"
                                  :basic-authorization '("nanook" "igloo")))

(ql:quickload :yason)

(let ((stream (drakma:http-request "https://api.github.com/orgs/edicl/public_members"
                                   :want-stream t)))
  (setf (flexi-streams:flexi-stream-external-format stream) :utf-8)
  (yason:parse stream :object-as :plist))


(let ((stream (drakma:http-request "https://api.github.com/orgs/edicl/public_members"
                                   :want-stream t)))
  (setf (flexi-streams:flexi-stream-external-format stream) :utf-8)
  (yason:parse stream :object-as :plist))


(let ((temp-file (ensure-directories-exist #p"/tmp/quux.txt"))
      (continuation (drakma:http-request "http://localhost:4242/hunchentoot/test/parameter_latin1_post.html"
                                         :method :post
                                         :content :continuation)))
  (funcall continuation "foo=" t)
  (funcall continuation (list (char-code #\z) (char-code #\a)) t)
  (funcall continuation (lambda (stream)
                          (write-char #\p stream)) t)
  (with-open-file (out temp-file
                       :direction :output
                       :if-does-not-exist :create
                       :if-exists :supersede)
    (write-string "p" out))
  (funcall continuation temp-file t)
  (cl-ppcre:scan-to-strings "zappzerapp" (funcall continuation "zerapp")))


(cl-ppcre:regex-replace-all
 "<.*?>"
 (format nil "~A~%~A"
         (drakma:http-request "http://members.shaw.ca/mitb/hunchentoot.html"
                              :range '(998 1034))
         (drakma:http-request "http://members.shaw.ca/mitb/hunchentoot.html"
                              :range '(1213 1249)))
 "")
