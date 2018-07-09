#!/bin/bash

bazel query --nohost_deps --noimplicit_deps 'deps(//main:hello-world)' --output graph

xdot <(bazel query --nohost_deps --noimplicit_deps 'deps(//main:hello-world)' --output graph)
