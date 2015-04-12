'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src([
    paths.src + '/{app,components}/**/*.ts',
    './typings/**/*.d.ts'
  ])
    .pipe($.typescript({
     target:'es5'
    }))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.typescriptAngular({
     decoratorModuleName:'fireboot'
    }))
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .pipe($.size())
});
