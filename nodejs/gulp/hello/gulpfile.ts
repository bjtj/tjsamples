var gulp = require('gulp');
var ts = require('gulp-typescript');
const pug = require('gulp-pug');

gulp.task('default', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('./dist'));
});
