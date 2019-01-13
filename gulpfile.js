const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');


function build(cb) {
  return src(['server/**/*.js', 'server.js'], { sourcemaps: true })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('server.min.js'))
    .pipe(dest('build', { sourcemaps: true }))
}

exports.default = build;
