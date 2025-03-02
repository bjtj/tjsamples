((nil .
      ((eval .
             ;; Local Process Environment
             ;; ====
             ;; https://faster-than-light-memes.xyz/dir-env-process-environment.html
             (progn
               (make-local-variable 'process-environment)
               (setq process-environment (copy-sequence process-environment))
               (setenv "JAVA_HOME" "c:/Program Files/Java/jdk-11"))))))
