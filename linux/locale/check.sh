#!/bin/bash

LOCALES=$(locale -a)

for LOCALE in $LOCALES; do
    echo "'$LOCALE'"
    DATE=$(LC_ALL=$LOCALE date)
    echo " * $DATE"
done
