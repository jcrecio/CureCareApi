const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');

function js(cb) {
    console.log("hola");
    return src(['**/*.js', '!node_modules/**/*.*'], { sourcemaps: true })
      .pipe(concat('app.min.js'))
      .pipe(dest('build/js', { sourcemaps: true }))
  }
  
  exports.default = js;