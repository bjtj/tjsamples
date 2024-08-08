#!/usr/bin/env bash

find . -name "Makefile" -exec sh -c 'make -C $(dirname {}) clean' \;
