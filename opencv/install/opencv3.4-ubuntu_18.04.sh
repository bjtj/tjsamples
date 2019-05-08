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
sudo apt install -y build-essential cmake git curl unzip pkg-config wget \
     libgtk-3-dev \
     ffmpeg libavcodec-dev libavformat-dev libswscale-dev libv4l-dev \
     libxvidcore-dev libx264-dev \
     libatlas-base-dev gfortran \
     python-dev python3-dev \
     libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libdc1394-22-dev

# python numpy
sudo pip install numpy
sudo pip3 install numpy

# download
if [ ! -f "opencv-$VERSION.zip" ]
then
    wget -c https://github.com/opencv/opencv/archive/$VERSION.zip \
	 -O opencv-$VERSION.zip
fi

if [ ! -f "opencv_contrib-$VERSION.zip" ]
then
    wget -c https://github.com/opencv/opencv_contrib/archive/$VERSION.zip \
	 -O opencv_contrib-$VERSION.zip
fi


# unzip
if [ ! -d "opencv-$VERSION" ]; then
    unzip "opencv-$VERSION.zip"
fi

if [ ! -d "opencv_contrib-$VERSION" ]; then
    unzip "opencv_contrib-$VERSION.zip"
fi

mkdir -p "opencv-$VERSION/build"
cd "opencv-$VERSION/build"

# https://www.pyimagesearch.com/2018/05/28/ubuntu-18-04-how-to-install-opencv/#comment-467524
export CC=/usr/bin/gcc-6
export CXX=/usr/bin/g++-6

# https://github.com/opencv/opencv/issues/8704#issuecomment-393738317
# -------------------------------------------------------------------
# -DCUDA_NVCC_FLAGS=--expt-relaxed-constexpr

# https://github.com/opencv/opencv_contrib/issues/1786#issuecomment-423434622
# -DBUILD_opencv_cudacodec=OFF

# configure
cmake -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX=/usr/local \
      -DINSTALL_C_EXAMPLES=OFF \
      -DINSTALL_PYTHON_EXAMPLES=OFF \
      -DBUILD_EXAMPLES=OFF \
      -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-$VERSION/modules \
      -DCUDA_NVCC_FLAGS=--expt-relaxed-constexpr \
      -DWITH_OPENGL=ON \
      -DWITH_FFMPEG=ON \
      -DWITH_V4L=ON \
      -DWITH_TBB=ON \
      -DWITH_IPP=OFF \
      -DOPENCV_ENABLE_NONFREE=True \
      -DBUILD_opencv_cudacodec=OFF \
      ..

# build
make
sudo make install
sudo ldconfig

