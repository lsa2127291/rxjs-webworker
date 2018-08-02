const gulp = require('gulp')
const clean = require('gulp-clean')
const babel = require('rollup-plugin-babel')
const rollup = require('gulp-rollup')
const resolve = require('rollup-plugin-node-resolve')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
gulp.task('clean', () => {
  return gulp.src('./dist', {read: false}).pipe(clean())
})
gulp.task('build-min', ['clean'], () => {
  return gulp.src('./src/**/*.js').pipe(rollup({
    allowRealFiles: true,
    input: './src/index.js',
    plugins: [resolve({
      module: true
    }), babel({
      "presets": ["es2015-rollup"]
    })],
    output: {
      format: 'umd',
      name: 'RxWorker'
    }
  })).pipe(rename({
    suffix: '.min'
  })).pipe(uglify()).pipe(gulp.dest('dist'))
})
gulp.task('build-normal', ['clean'], () => {
  return gulp.src('./src/**/*.js').pipe(rollup({
    allowRealFiles: true,
    input: './src/index.js',
    plugins: [resolve({
      module: true
    }), babel({
      "presets": ["es2015-rollup"]
    })],
    output: {
      format: 'umd',
      name: 'RxWorker'
    }
  })).pipe(gulp.dest('dist'))
})
gulp.task('build', ['build-min', 'build-normal'])
