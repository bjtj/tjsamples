# The Common Lisp Cookbook - Getting started

* https://lispcookbook.github.io/cl-cookbook/getting-started.html


## Make project

```
(ql:quickload "cl-project")
(cl-project:make-project #P"./path-to-project/root/")
```

```
(cl-project:make-project #P"./hello")

writing ./hello/hello.asd
writing ./hello/hello-test.asd
writing ./hello/README.org
writing ./hello/README.markdown
writing ./hello/.gitignore
writing ./hello/src/hello.lisp
writing ./hello/tests/hello.lisp
T
```

## Usage

* Place the project into `~/quicklisp/local-projects`
* 
```
(ql:quickload :hello)
(in-package :hello)
(hello)
"Hello World"
```

## quickproject

* https://www.xach.com/lisp/quickproject/


## 21. Programming in the Large: Packages and Symbols (gigamonkeys)

* http://www.gigamonkeys.com/book/programming-in-the-large-packages-and-symbols.html

```
*package*
```

