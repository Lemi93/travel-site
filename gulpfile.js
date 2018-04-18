var gulp = require('gulp'),
    wathch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer')
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested')
    cssImport = require('postcss-import');


gulp.task('default', function() {
    console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function(){
    console.log("Imagine somenthing usefull being done to your HTML here.");
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    wathch('./app/index.html', function() {
        gulp.start('html');
    });

    wathch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});