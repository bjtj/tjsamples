# Installing Cython #

<https://cython.readthedocs.io/en/latest/src/quickstart/install.html>

## Linux ##

```bash
sudo apt-get install build-essential python3-dev
```

## PIP ##

```
pip install Cython
```


# cython compilation #

<https://cython.readthedocs.io/en/latest/src/userguide/source_files_and_compilation.html#compiling-command-line>

* e.g.)

```
$ cython primes.pyx
$ gcc -shared -pthread -fPIC -fwrapv -O2 -Wall -fno-strict-aliasing -I/usr/include/python3.5 -o primes.so primes.c
```


# Language Level #

<https://stackoverflow.com/a/53992016>



