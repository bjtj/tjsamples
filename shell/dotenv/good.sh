#!/usr/bin/env bash

source dotenv.sh

readenv .env
# export "$(grep -vE "^(#.*|\s*)$" .env)"

printenv
