# Development Environment

* https://vulkan-tutorial.com/Development_environment

## Requirements
* Lunarg SDK
* GLFW
* GLM

# Lunarg SDK

* https://vulkan.lunarg.com/

    * Download `tar.gz` file
	

e.g.)
```
sudo apt install libxcb1-dev xorg-dev
tar xvf vulkansdk-linux-x86_64-1.1.92.1.tar.gz
cd 1.1.92.1
./build_examples.sh
examples/build/vkcube
```

# GLFW

* https://www.glfw.org/

e.g.)
```
unzip glfw-3.2.1.zip
cd glfw-3.2.1/
mkdir build
cd build
cmake ..
make
sudo make install
```


# GLM

```
sudo apt install libglm-dev
```

or Download source distribution

* https://github.com/g-truc/glm/tags

```
tar xvf glm-0.9.9.3.tar.gz
cd glm-0.9.9.3
mkdir build
cd build/
cmake ..
make
sudo make install
```
