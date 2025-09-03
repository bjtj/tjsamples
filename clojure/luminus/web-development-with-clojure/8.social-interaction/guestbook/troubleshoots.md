# Troubleshoots

## Cannot find module '@cljs-oss/module-deps'

I removed `cljsbuild` from `project.clj`, and now use `shadow-cljs` with npm instead.

## Stale output! Your loaded JS was not produced by the running shadow-cljs instance

The reason may vary. Try doing hard refresh in your browser (e.g., `Ctrl + Shift + R` or `Shift + F5`)
