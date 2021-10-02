

;; https://stackoverflow.com/a/1817318

;; `gnu'         compiled for a GNU Hurd system.
;; `gnu/linux'   compiled for a GNU/Linux system.
;; `darwin'      compiled for Darwin (GNU-Darwin, Mac OS X, ...).
;; `ms-dos'      compiled as an MS-DOS application.
;; `windows-nt'  compiled as a native W32 application.
;; `cygwin'      compiled using the Cygwin library.

(print system-type)

(if (eq system-type 'windows-nt)
    (print 'in-windows)
  (print 'not-in-windows))
