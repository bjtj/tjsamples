# clojure hello world

<https://coderwall.com/p/yb1k-q/hello-world-in-clojure>

e.g.)

```bash
lein new hello-world
cd hello-world
```

* add `main` function `src/hello_world/core.clj`

```clj
(defn -main [& args]
  (println "Hello, World!"))
```

* edit `project.clj`

```clj
:main hello-world.core
```

Run

```bash
lein run
```

## lein

<https://leiningen.org/>


## lein-exec

<https://github.com/kumarshantanu/lein-exec>

```bash
$ lein exec <.clj file>
```

Lein 2

* `~/.lein/profiles.clj`

```clj
{:user {:plugins [[lein-exec "0.3.7"]]}}
```

Lein 1.x

```bash
$ lein plugin install lein-exec "0.1"
```


# clj on Windows #

<https://github.com/clojure/tools.deps.alpha/wiki/clj-on-Windows>

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://download.clojure.org/install/win-install-1.11.1.1165.ps1')
```

```cmd
powershell -command clj 
```

```cmd
powershell -command clj '-J"-Dfile.encoding=UTF-8"'
```


## Sample Makefile ##

``` makefile
CLJ ?= clj

all: start

start:
	$(CLJ) -X:start

run:
	$(CLJ) -M:run-m

test:
	$(CLJ) -T:build test

clean:
	rm -rf target

.PHONY: all start run test clean

```
