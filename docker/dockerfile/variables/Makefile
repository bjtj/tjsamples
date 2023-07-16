all: test

test:
	docker build -t vartest:1 .
	@echo =================================
	docker run --rm -t vartest:1
	@echo =================================
	docker run --rm -t -e _MYMSG=hahaha vartest:1
	@echo =================================
	docker run --rm -t -e _MYMSG=hahaha vartest:1 x y z
	docker rmi vartest:1

.PHONY: test
