#!/bin/bash

# http://caffe.berkeleyvision.org/install_apt.html

set -e

SKIP_EDIT=0
SKIP_TEST=0

while [ -n "$1" ]; do
    case "$1" in
	--skip-test)
	    SKIP_TEST=1
	    ;;
	--skip-edit)
	    SKIP_EDIT=1
	    ;;
	*)
	    echo "Unknonw argument -- '$1'"
	    ;;
    esac
    shift
done


if [ -z ${EDITOR+x} ]; then
    EDITOR=vim
fi

if [ -z ${CMD_PIP+x} ]; then
    CMD_PIP=pip
fi

cd $HOME
mkdir -p caffe
cd caffe

if [ "$UID" == "0" ]; then
    apt update
    apt install -y sudo
else
    sudo apt update
fi

sudo apt upgrade -y
sudo apt install -y build-essential curl wget cmake pkg-config vim \
     libprotobuf-dev libleveldb-dev libsnappy-dev libhdf5-serial-dev protobuf-compiler \
     libgflags-dev libgoogle-glog-dev liblmdb-dev \
     libatlas-base-dev \
     python-numpy python3-numpy

sudo apt install -y --no-install-recommends libboost-all-dev

# download
if [ ! -d "caffe-1.0" ]; then
    curl -L https://github.com/BVLC/caffe/archive/1.0.tar.gz | tar xvz
fi
cd caffe-1.0

if [ ! -f "Makefile.config" ]; then
    cp Makefile.config.example Makefile.config
fi

# message

if [ "$SKIP_EDIT" == "0" ]; then

    echo "======================================================="
    echo " Edit Makefile.config "
    echo "======================================================="

    $EDITOR Makefile.config

else

    echo "======================================================="
    echo " SKIP -- Edit Makefile.config "
    echo "======================================================="

fi

# compilation
make all -j

if [ "$SKIP_TEST" == "0" ]; then
    make test -j
    make runtest
fi

# pycaffe
sudo $CMD_PIP install -r python/requirements.txt
make pycaffe

echo "======================================================="
echo " Add PYTHONPATH to .bashrc "
echo "======================================================="
echo "export CAFFE_ROOT=\"$(pwd)\"" >> "$HOME/.bashrc"
echo "export PYTHONPATH=\"\$CAFFE_ROOT/python\":\$PYTHONPATH" >> "$HOME/.bashrc"

# https://github.com/dungba88/caffe-python3-install/issues/1
$CMD_PIP install python-dateutil --upgrade 
