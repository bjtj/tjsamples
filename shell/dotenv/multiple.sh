#!/usr/bin/env bash

source dotenv.sh

readenv .x.env
readenv .child.env
readenv .parent.env

echo "A - '$A'"
echo "B - '$B'"
echo "C - '$C'"
echo "D - '$D'"
