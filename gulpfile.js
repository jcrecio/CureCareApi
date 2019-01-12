const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');

function build(cb) {
    return src(['server/**/*.js'], { sourcemaps: true })
      .pipe(concat('server.min.js'))
      .pipe(dest('build', { sourcemaps: true }))
  }
  
  exports.default = build;