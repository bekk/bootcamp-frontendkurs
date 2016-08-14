var gulp = require('gulp');
var rename = require('gulp-rename');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var less = require('gulp-less');
var uglify = require('gulp-uglify');
var browserify = require('browserify');

var SOURCE_DIRECTORY = 'src';
var OUTPUT_DIRECTORY = 'dist';

gulp.task('clean', function () {
    return del(OUTPUT_DIRECTORY + '/**/*');
});

gulp.task('copy-html', function () {
    return gulp.src(SOURCE_DIRECTORY + '/index.html')
        .pipe(gulp.dest(OUTPUT_DIRECTORY));
});

gulp.task('build', ['clean'], function () {
    return gulp.start(['copy-html', 'build-less', 'build-js']);
});

gulp.task('default', function () {
    console.log('skriv inn en kommando, f. eks. "gulp clean"');
});

gulp.task('build-less', function () {
    return gulp.src(SOURCE_DIRECTORY + '/css/main.less')
        .pipe(less())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest(OUTPUT_DIRECTORY));
});

gulp.task('build-js', function () {
    return browserify(SOURCE_DIRECTORY + '/js/app.js', {debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(OUTPUT_DIRECTORY));
});

gulp.task('watch', function () {
    gulp.start('build');

    gulp.watch(SOURCE_DIRECTORY + '/css/*', ['build-less']);
    gulp.watch(SOURCE_DIRECTORY + '/js/*', ['build-js']);
    gulp.watch(SOURCE_DIRECTORY + '/index.html', ['copy-html']);
});