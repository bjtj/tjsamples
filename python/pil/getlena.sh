#!/bin/bash

URLS=(https://www.cosy.sbg.ac.at/~pmeerw/Watermarking/lena_gray.gif
      https://www.cosy.sbg.ac.at/~pmeerw/Watermarking/lena_color.gif)


for URL in ${URLS[@]}; do
    curl -OL $URL
done
