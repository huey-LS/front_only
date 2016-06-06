var gulp = require('gulp');
var webpack = require('webpack-stream');

var babel = require('babel-core');
require('babel-preset-react');


gulp.task('jsx', function(){
  return gulp.src('./src/jsx/*.jsx')
  .pipe(function(file, enc, cb){
    var res = babel.transform(file.contents.toString(), {
      presets: ['react', 'es2015']
    }, {
      filename: file.path,
      fllenameRelatvie: file.relatvie
    });

    return res;
  })
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
  return gulp.src('./src/js/home.js')
  .pipe(webpack( require('./src/webpack.config.js') ))
  .pipe(gulp.dest('dist/'));
});