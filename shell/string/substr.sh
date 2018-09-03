#!/bin/bash

# https://stackoverflow.com/a/428118

INPUT='someletters_12345_moreleters.ext'
SUBSTRING=$(echo $INPUT | cut -d'_' -f 2)
echo $SUBSTRING

