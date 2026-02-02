^{:nextjournal.clerk/visibility :hide}

(require '[nextjournal.clerk :as clerk])

(clerk/serve! {:browse true
               :watch-paths ["src"]
               :redner-nrepl {}})
