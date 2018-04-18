const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('minifyjs', () => {
    gulp.src('src/js/*.js')
      .pipe(concat('bundle.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('src/js/main'))
});

gulp.task('default', ['minifyjs']);