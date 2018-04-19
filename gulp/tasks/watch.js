var gulp = require('gulp'),
    wathch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    wathch('./app/index.html', function() {
        browserSync.reload();
    });

    wathch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});