LD=ld
ASM=nasm

all: hello

hello: hello.o
	${LD} -s -o hello hello.o

hello.o: hello.asm
	${ASM} -f elf64 $<
