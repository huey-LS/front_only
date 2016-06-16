var gulp = require('gulp');
var webpack = require('webpack-stream');

var babel = require('gulp-babel');
require('babel-preset-react');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('jsx', function(){
  return gulp.src('./src/jsx/*.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minifyjs', function(){
  return gulp.src('./dist/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  return gulp.src('./src/js/home.js')
  .pipe(webpack( require('./src/webpack.config.js') ))
  .pipe(gulp.dest('dist/'));
});