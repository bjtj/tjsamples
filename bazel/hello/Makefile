BAZEL=bazel

.PHONY: all build run graph clean

all: build

build:
	$(BAZEL) build //main:hello-world

run: build
	./bazel-bin/main/hello-world

graph.out:
	$(BAZEL) query --nohost_deps --noimplicit_deps 'deps(//main:hello-world)' --output graph > graph.out

graph: graph.out
	xdot $<

clean:
	$(BAZEL) clean
	rm -rf graph.out
