#!/bin/bash

# https://www.ibm.com/support/knowledgecenter/ko/ssw_aix_71/com.ibm.aix.cmds2/getopts.htm

set -e

aflag=
bflag=
cflag=

while getopts a:bc: opt; do
    case $opt in
	a)
	    aflag="$OPTARG"
	    ;;
	b)
	    bflag=1
	    ;;
	c)
	    cflag="$OPTARG"
	    ;;
	\?)
	    echo "Usage) $0 [-a value] [-b] [-c value] args" >&2
	    exit 1
	    ;;
    esac
done

echo "a flag: $aflag"
echo "b flag: $bflag"
echo "c flag: $cflag"

echo "\$OPTIND: $OPTIND"

shift $(($OPTIND -1))
echo "Remaining arguments are: '$*'"
