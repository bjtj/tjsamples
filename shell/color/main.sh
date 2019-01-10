#!/bin/bash

RED='\033[0;31m'
NC='\033[0m'
echo -e "hello world"
echo -e "hello ${RED}world${NC}"
echo -e "\033[0;42m\033[1;37mhello\033[0m world"

echo "FOREGROUND"
echo "=========="
for i in $(seq 0 7); do
    echo -e "$i -- \033[0;3${i}mhello\033[0m"
done

echo "BACKGROUND"
echo "=========="
for i in $(seq 0 7); do
    echo -e "$i -- \033[0;4${i}mhello\033[0m"
done

