var
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var DIST = 'dist/'

gulp.task('dist', function () {
    gulp.src('src/*.js')
        .pipe(concat('ng-observe.js'))
        .pipe(gulp.dest(DIST))
        .pipe(uglify({ preserveComments: 'license' }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DIST))
});

gulp.task('default', ['dist']);