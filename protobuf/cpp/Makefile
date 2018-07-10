.PHONY: write read

all: write read

prepare:
	mkdir -p out

write: prepare
	g++ -o out/write write.cpp addressbook.pb.cc `pkg-config --cflags --libs protobuf`

read: prepare
	g++ -o out/read read.cpp addressbook.pb.cc `pkg-config --cflags --libs protobuf`

clean:
	rm -rf out
