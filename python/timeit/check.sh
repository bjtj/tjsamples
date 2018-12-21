#!/bin/bash

python -m timeit '"-".join(str(n) for n in range(100))'

python -m timeit -s 'text = "sample string"; char = "g"' 'char in text'
