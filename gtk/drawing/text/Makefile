CXX=g++
CXXFLAGS=$(shell pkg-config --cflags gtkmm-3.0)
LDXXFLAGS=$(shell pkg-config --libs gtkmm-3.0)
SRCS=src/myarea.h src/myarea.cc src/main.cc

all: myarea


myarea:
	$(CXX) -o $@ $(SRCS) $(CXXFLAGS) $(LDXXFLAGS)
