VULKAN_SDK_PATH=$(HOME)/vulkansdk/1.1.92.1/x86_64
CXXFLAGS=-std=c++17 -I$(VULKAN_SDK_PATH)/include
LDFLAGS=-L$(VULKAN_SDK_PATH)/lib `pkg-config --static --libs glfw3` -lvulkan
PROGRAM=prog

.PHONY: test testx clean

all: $(PROGRAM)

$(PROGRAM):
	g++ $(CXXFLAGS) -o $@ main.cpp $(LDFLAGS)

test: $(PROGRAM)
	LD_LIBRARY_PATH=$(VULKAN_SDK_PATH)/lib ./$(PROGRAM)

testx: $(PROGRAM)
	LD_LIBRARY_PATH=$(VULKAN_SDK_PATH)/lib VK_LAYER_PATH=$(VULKAN_SDK_PATH)/etc/explicit_layer.d ./$(PROGRAM)

clean:
	rm -rf $(PROGRAM)
