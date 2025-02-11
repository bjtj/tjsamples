#!/usr/bin/env bash

if [ -z $1 ] || [ -z $2 ]
then
    echo "usage: `basename $0` <channel> <text>"
    exit 1
fi


TOKEN=$(cat .token)
CHANNEL=$1
TEXT=$2

curl --location "https://slack.com/api/chat.postMessage" \
--header "Content-Type: application/x-www-form-urlencoded" \
--header "Authorization: Bearer $TOKEN" \
--data-urlencode "text=$TEXT" \
--data-urlencode "channel=$CHANNEL"

exit $?

