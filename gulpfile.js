var path = require("path");
var gulp = require("gulp");
var babel = require("gulp-babel");
var eslint = require('gulp-eslint');
//var concat = require("gulp-concat");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task("babel", function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/babel/"));
});

gulp.task("browserify", [ "babel" ], function() {
  var entry = "./build/babel/client/main.js";
  var filename = path.basename(entry);
  var bundler = browserify({
    entries: [ entry ],
    debug: true
  });
  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(filename))
      .pipe(buffer())
      //.pipe(sourcemaps.init({ loadMaps: true }))
      // Add transformation tasks to the pipeline here.
      //.pipe(uglify())
      //.pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./static/build/'));
  };
  return bundle();
});

gulp.task("lint", function() {
  return gulp.src([ "src/**/*.js" ])
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("build", [ "browserify" ]);
gulp.task("test", [ "lint" ]);
gulp.task("default", [ "build", "test" ]);
