const gulp = require('gulp')
const clean = require('gulp-clean')
const babel = require('rollup-plugin-babel')
const rollup = require('gulp-rollup')
const resolve = require('rollup-plugin-node-resolve')

gulp.task('clean', () => {
  return gulp.src('./dist', {read: false}).pipe(clean())
})
gulp.task('build', ['clean'], () => {
  return gulp.src('./src/**/*.js').pipe(rollup({
    allowRealFiles: true,
    input: './src/index.js',
    plugins: [resolve({
      module: true
    }), babel({
      "presets": ["es2015-rollup"],
    })],  
    output: {
      format: 'umd',
      name: 'RxWorker'
    }
  })).pipe(gulp.dest('dist'))
})

