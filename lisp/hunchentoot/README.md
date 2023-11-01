# The Common Lisp Cookbook – Web development #

<https://lispcookbook.github.io/cl-cookbook/web.html>

e.g.)

``` common-lisp
(defvar *acceptor* (make-instance 'hunchentoot:easy-acceptor :port 4242))
(hunchentoot:start *acceptor*)

;; http://localhost:4242/www/index.html

(defvar *my-acceptor* (make-instance 'hunchentoot:easy-acceptor :port 4444 :document-root #p"www/"))
(hunchentoot:start *my-acceptor*)
```


## Dependencies ##

### openssl ###

<https://www.openssl.org/source/>

**Windows**

<https://github.com/openssl/openssl/blob/master/NOTES-WINDOWS.md>

*Requirements*

- Perl (with Win32.Console)
- NASM
- Visual Studio

*Build*

Open `x64 Native Tools Command Prompt for VS 2022` prompt

```
perl Configure
nmake
```

Output files:

- libcrypto-3-x64.dll
- libssl-3-x64.dll
