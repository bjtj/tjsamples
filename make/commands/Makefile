all:


fail: clean
	mkdir -p temp
	cd temp
	touch a
	ls temp/a

ok: clean
	mkdir -p temp
	cd temp && touch a
	ls temp/a

verbose:
	echo "hello"

silent:
	@echo "hello"

clean:
	rm -rf temp a
