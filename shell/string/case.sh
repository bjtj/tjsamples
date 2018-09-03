#!/bin/bash

# https://stackoverflow.com/a/2264537

lc() {
    case "$1" in
	[A-Z])
	    n=$(printf "%d" "'$1")
	    n=$((n+32))
	    printf \\$(printf "%o" "$n")
	    ;;
	*)
	    printf "%s" "$1"
	    ;;
    esac
}

uc() {
    case "$1" in
	[a-z])
	    n=$(printf "%d" "'$1")
	    n=$((n-32))
	    printf \\$(printf "%o" "$n")
	    ;;
	*)
	    printf "%s" "$1"
	    ;;
    esac
}

word="I Love Bash"
for ((i=0;i<${#word};i++))
do
    ch="${word:$i:1}"
    lc "$ch"
done

echo ""

word="I Love Bash"
for ((i=0;i<${#word};i++))
do
    ch="${word:$i:1}"
    uc "$ch"
done

echo ""
