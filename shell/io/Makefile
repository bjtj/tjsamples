all: test clean

test:
	@./echo.sh > "stdin" 2>/dev/null
	@./echo.sh 2> "stderr" 1>/dev/null
	@echo "[stdin]"
	@cat "stdin"
	@echo "[stderr]"
	@cat "stderr"

clean:
	@rm -rf stdin stderr
