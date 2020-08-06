CXXFLAGS=`pkg-config gtkmm-3.0 --cflags`
LDFLAGS=`pkg-config gtkmm-3.0 --libs`

all: prog

prog:
	g++ main.cc -g -Wall -o $@ $(CXXFLAGS) $(LDFLAGS)
