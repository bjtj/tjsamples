#!/usr/bin/env bash


echo "Hello world" > .text
VAR=$(cat '.text')

echo "MESSAGE: '$VAR'"
