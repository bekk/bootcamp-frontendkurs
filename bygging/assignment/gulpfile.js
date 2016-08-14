var gulp = require('gulp');
var rename = require('gulp-rename');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


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
    // legg til alle tasks i arrayet under
    return gulp.start([]);
});



gulp.task('watch', function () {
    gulp.start('build');

    // legg til watchers for de forskjellige jobbene
    // gulp.watch(SOURCE_DIRECTORY + '/sti/til/fil.noe', ['task-som-skal-kjøres-når-endres']);
});