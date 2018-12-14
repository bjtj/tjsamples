
CXXFLAGS =
LDFLAGS = 

all: prog prog++

libhello.so: hello.cpp
	g++ -fPIC -shared -o $@ $< $(CXXFLAGS) $(LDFLAGS)

prog: libhello.so main.c
	gcc -o $@ main.c -lhello

prog++: libhello.so main.cpp
	g++ -o $@ main.cpp -lhello

clean:
	rm -rf prog prog++ libhello.so
