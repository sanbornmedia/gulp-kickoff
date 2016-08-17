var browserify = require('browserify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('scripts', function(){
    var b = browserify();
    b.add('./js/main.js');
    return b.bundle()
        .pipe(source('scripts.concat.js'))
        .pipe(rename('script.js'))
        .pipe(gulp.dest('./'))
});

gulp.task('sass', function(){
  gulp.src('./sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
})

gulp.task('default', function() {
    gulp.start(['scripts', 'sass']);
    gulp.watch(['./js/**/*.js'], ['scripts']);
    gulp.watch(['./sass/**/*.scss', './sass/**/*.css'], ['sass']);
});