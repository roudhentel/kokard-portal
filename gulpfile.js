var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function () {
    gulp.src('./public/css/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
    gulp.src('./public/css/*/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/css/*.scss', ['sass']);
    gulp.watch('./public/css/**/*.scss', ['sass']);
});