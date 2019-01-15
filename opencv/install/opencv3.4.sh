#!/bin/bash

VERSION=3.4.1

# update
if [ "$UID" == "0" ]; then
    apt update
    apt install -y sudo
else
    sudo apt update
fi

# install
sudo apt install -y build-essential cmake git curl pkg-config wget \
     libgtk2.0-dev \
     ffmpeg libavcodec-dev libavformat-dev libswscale-dev libv4l-dev \
     libxvidcore4 libx264-148 \
     libatlas-base-dev gfortran \
     python-dev python-pip \
     python3-dev python3-pip \
     libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev \
     unzip

# python numpy
sudo pip install numpy
sudo pip3 install numpy

# download
wget -c https://github.com/opencv/opencv/archive/$VERSION.zip -O opencv-$VERSION.zip
wget -c https://github.com/opencv/opencv_contrib/archive/$VERSION.zip -O opencv_contrib-$VERSION.zip

# unzip
if [ ! -d "opencv-$VERSION" ]; then
    unzip "opencv-$VERSION.zip"
fi

if [ ! -d "opencv_contrib-$VERSION" ]; then
    unzip "opencv_contrib-$VERSION.zip"
fi

mkdir -p "opencv-$VERSION/build"
cd "opencv-$VERSION/build"

# configure
cmake -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX=/usr/local \
      -DINSTALL_C_EXAMPLES=OFF \
      -DINSTALL_PYTHON_EXAMPLES=OFF \
      -DBUILD_EXAMPLES=OFF \
      -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-$VERSION/modules \
      -DWITH_OPENGL=ON \
      -DWITH_FFMPEG=ON \
      -DWITH_V4L=ON \
      -DWITH_TBB=ON \
      -DWITH_IPP=OFF \
      -DOPENCV_ENABLE_NONFREE=True \
      ..

# build
make -j
sudo make install
sudo ldconfig

