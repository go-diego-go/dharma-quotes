// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var mocha = require('gulp-mocha');
var shell = require('gulp-shell');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['js/*.js', '!js/bundle.js', '!js/textFit.min.js'])
        .pipe(jshint({esversion: 6}))
        .pipe(jshint.reporter('default'));
});


gulp.task('package', function() {
    return gulp.src(['index.html',
                     'manifest.json',
                     'fonts/**',
                     'icons/**',
                     'images/**',
                     'css/styles.css',
                     'js/textFit.min.js',
                     'js/bundle.js'
                    ], {base: '.'})
        .pipe(zip('dharma-quotes.zip'))
        .pipe(gulp.dest('dist'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint']);
});

gulp.task('test', function() {
    return gulp.src(['test/test-*.js'], {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('bundle', function() {
  var b = browserify({
    entries: 'js/app.js',
    debug: true
  })
  .transform(babelify.configure({presets: ["es2015"]}));

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
        .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('run', shell.task('open index.html'));

// Default Task
gulp.task('default', ['lint', 'test', 'bundle', 'package']);

