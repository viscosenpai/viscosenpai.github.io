'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync');

gulp.task('sass', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4', 'ios_saf >= 8'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('browsersync', () => {
  browsersync({
    server: {
      baseDir: './',
      index: 'index.html'
    },
    port: 8080
  });
});

gulp.task('reload', () => {
  browsersync.reload();
});

gulp.task('watch', ['sass', 'browsersync'], () => {
  gulp.watch('./*.html', ['reload']);
  gulp.watch('./src/**/*.scss', ['reload']);
  gulp.watch('./src/**/*.js', ['reload']);
});

gulp.task('default', ['watch', 'browsersync']);