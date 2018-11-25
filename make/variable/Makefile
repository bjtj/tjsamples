# declaration test
VAR1 := var1
VAR2 ?= var2

# expand test
MYVAR = "my var!"
IMMEDIATE := $(MYVAR)
LAZY = $(MYVAR)
MYVAR = "new my var!"

all:

print-path:
	@echo $(PATH)


print-var:
	echo $(VAR1)
	echo $(VAR2)

print-expand:
	@echo "MYVAR is '$(MYVAR)'"
	@echo "IMMEDIATE is '$(IMMEDIATE)'"
	@echo "LAZY is '$(LAZY)'"

