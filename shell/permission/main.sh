#!/bin/bash

if [ `id -u` == '0' ]
then echo "You are root"
else echo "You are not root"
fi
