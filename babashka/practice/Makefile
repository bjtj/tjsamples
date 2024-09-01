BB ?= bb

all:

clean:
	$(BB) clean

tasks:
	$(BB) tasks

foo:
	$(BB) foo 1 2 3

sum:
	$(BB) run --prn sum

ifeq ($(OS),Windows_NT)
print-env:
	set FOO=1 && $(BB) print-env FOO
else
print-env:
	FOO=1 $(BB) print-env FOO
endif

.PHONY: all clean tasks foo sum print-env
