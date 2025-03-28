#!/usr/bin/env bash

print_info () {
    cd
    pwd
    id
}

type print_info

bash -c "$(declare -f print_info); print_info"

