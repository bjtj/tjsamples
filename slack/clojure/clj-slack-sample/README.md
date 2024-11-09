# clj-slack-sample

clj-slack sample

## Usage

Run the project directly, via `:main-opts` (`-m clj-slack-sample.clj-slack-sample`):

    $ clojure -M:run-m

repl:

    (require '[clj-slack-sample.clj-slack-sample :as s])
    (s/-main)
    (s/post-message (s/read-env) "Hello World!")
