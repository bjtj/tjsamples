#!/usr/bin/env bash

export "$(grep -vE "^(#.*|\s*)$" .env)"

printenv
