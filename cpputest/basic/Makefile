CXXFLAGS=`pkg-config --cflags cpputest`
LDFLAGS=`pkg-config --libs cpputest`

CXX=g++
TARGET=test
SRCS=main.cpp test.c

all: check

${TARGET}:
	${CXX} -o ${TARGET} ${SRCS} ${CXXFLAGS} ${LDFLAGS}

check: ${TARGET}
	./${TARGET}

clean:
	rm -rf ${TARGET}
