#!/bin/bash

set -e

mkdir -p /tmp/emacs
cd /tmp/emacs
sudo apt install -y libxpm-dev libjpeg-dev libpng-dev libgif-dev libtiff-dev libgnutls-dev libncurses-dev
curl -OL http://ftp.jaist.ac.jp/pub/GNU/emacs/emacs-26.1.tar.gz
tar xvf emacs-26.1.tar.gz
cd emacs-26.1
./configure --with-x-toolkit=no
make -j
sudo make install
rm -rf /tmp/emacs
