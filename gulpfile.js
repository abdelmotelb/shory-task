// 'use strict';
//
// var gulp = require('gulp');
// var sass = require('gulp-sass');
//
// gulp.task('sass', function () {
//     return gulp.src('./src/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./dist/css'));
// });
//
// gulp.task('sass:watch', function () {
//     gulp.watch('./src/sass/**/*.scss', ['sass']);
// });

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);