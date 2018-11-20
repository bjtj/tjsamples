#!/bin/bash

set -e

sudo apt install libxpm-dev libjpeg-dev libpng-dev libgif-dev libtiff-dev libgnutls-dev libncurses-dev
curl -OL http://ftp.jaist.ac.jp/pub/GNU/emacs/emacs-26.1.tar.gz
tar xvf emacs-26.1.tar.gz
cd emacs-26.1.tar.gz
./configure --with-x-toolkit=no
make -j
sudo make install
