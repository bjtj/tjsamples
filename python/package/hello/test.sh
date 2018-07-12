#!/bin/bash

mkdir -p test
cd test
python -c "import hello; hello.wow()"
python -c "import hello.greet; hello.greet.say()"
