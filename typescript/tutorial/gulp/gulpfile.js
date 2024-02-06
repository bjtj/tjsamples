var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// Browserify - https://www.typescriptlang.org/docs/handbook/gulp.html#browserify

var browserify = require("browserify");
var source = require("vinyl-source-stream");
var terser = require("gulp-terser");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var watchify = require("watchify");
var tsify = require("tsify");
var fancy_log = require("fancy-log");
var paths = {
  pages: ["src/*.html"],
};

var watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.ts"],
    cache: {},
    packageCache: {},
  }).plugin(tsify)
);

gulp.task("copy-html", function () {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

function bundle() {
  return watchedBrowserify
    .bundle()
    .on("error", fancy_log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
}

// gulp.task("default", gulp.series(gulp.parallel("copy-html"), bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);

// gulp.task(
//   "default",
//   gulp.series(gulp.parallel("copy-html"), function () {
//     return browserify({
//       basedir: ".",
//       debug: true,
//       entries: ["src/main.ts"],
//       cache: {},
//       packageCache: {},
//     })
//       .plugin(tsify)
//       .bundle()
//       .pipe(source("bundle.js"))
//       .pipe(gulp.dest("dist"));
//   })
// );

// Terser

// gulp.task(
//   "default",
//   gulp.series(gulp.parallel("copy-html"), function () {
//     return browserify({
//       basedir: ".",
//       debug: true,
//       entries: ["src/main.ts"],
//       cache: {},
//       packageCache: {},
//     })
//       .plugin(tsify)
//       .bundle()
//       .pipe(source("bundle.js"))
//       .pipe(buffer())
//       .pipe(sourcemaps.init({ loadMaps: true }))
//       .pipe(terser())
//       .pipe(sourcemaps.write("./"))
//       .pipe(gulp.dest("dist"));
//   })
// );


// Babel

gulp.task(
  "default",
  gulp.series(gulp.parallel("copy-html"), bundle, function () {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .transform("babelify", {
        presets: ["es2015"],
        extensions: [".ts"],
      })
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(terser())
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("dist"));
  })
);