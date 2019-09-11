#!/bin/bash

echo " == test == "
./getopts.sh

echo " == test == "
./getopts.sh -a 10

echo " == test == "
./getopts.sh -a 10 -b -c 20

echo " == test == "
./getopts.sh -a 10 -b x -c 20	# weird

echo " == test == "
./getopts.sh -a 10 -b -c 20 hello

echo " == test == "
./args.sh

echo " == test == "
./args.sh x y z

echo " == test == "
./args.sh x

