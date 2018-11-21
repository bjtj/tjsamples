#!/bin/bash

# http://caffe.berkeleyvision.org/install_apt.html

set -e

SKIP_EDIT=0
if [ "$1" == "--skip-edit" ]; then
    SKIP_EDIT=1
fi

if [ -z ${EDITOR+x} ]; then
    EDITOR=vim
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
     libgflags-dev libgoogle-glog-dev liblmdb-dev

sudo apt install -y --no-install-recommends libboost-all-dev


# download
if [ ! -d "caffe-1.0" ]; then
    curl -L https://github.com/BVLC/caffe/archive/1.0.tar.gz | tar xvz
fi
cd caffe-1.0

if [ -! -f "Makefile.config" ]; then
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
make all
make test
make runtest
