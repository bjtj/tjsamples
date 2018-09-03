#!/bin/bash

# https://stackoverflow.com/a/3232433

# sample text
FOO=' test test test '
echo -e "FOO='${FOO}'"
echo -e "length(FOO)==${#FOO}"

# no whitespace
FOO_NO_WHITESPACE="$(echo -e "${FOO}" | tr -d '[:space:]')"
echo -e "FOO_NO_WHITESPACE='${FOO_NO_WHITESPACE}'"
echo -e "length(FOO_NO_WHITESPACE)==${#FOO_NO_WHITESPACE}"

# no trail space
FOO_NO_TRAIL_SPACE="$(echo -e "${FOO}" | sed -e 's/[[:space:]]*$//')"
echo -e "FOO_NO_TRAIL_SPACE='${FOO_NO_TRAIL_SPACE}'"
echo -e "length(FOO_NO_TRAIL_SPACE)==${#FOO_NO_TRAIL_SPACE}"

# no both leading and trailing space
FOO_NO_EXTERNAL_SPACE="$(echo -e "${FOO}" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
echo -e "FOO_NO_EXTERNAL_SPACE='${FOO_NO_EXTERNAL_SPACE}'"
echo -e "length(FOO_NO_EXTERNAL_SPACE)==${#FOO_NO_EXTERNAL_SPACE}"
