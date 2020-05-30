#!/usr/bin/env bash

python3 -m venv hello
source hello/bin/activate
which python
which pip
deactivate
rm -rf hello
