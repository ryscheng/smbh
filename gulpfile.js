var path = require("path");
var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require("babelify");
var eslint = require('gulp-eslint');
//var concat = require("gulp-concat");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var fs = require("fs-extra");

gulp.task("babel", function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/babel/"));
});

gulp.task("browserify", function() {
  var entry = "./src/client/main.js";
  var dest = "./static/build/";
  var filename = path.basename(entry);
  var bundle = browserify({
    entries: [ entry ],
    debug: true
  }).transform(babelify)
    .bundle()
    .pipe(source(filename))
    .pipe(buffer());
  if (process.env.NODE_ENV === "production") {
    return bundle
      .pipe(sourcemaps.init({ loadMaps: true }))
      // --- Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest));
  } else {
    return bundle.pipe(gulp.dest(dest));
  }
});

gulp.task("lint", function() {
  return gulp.src([ "src/**/*.js" ])
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

//@todo
gulp.task("clean", function() {
  fs.removeSync("build/");
  fs.removeSync("static/build/");
});

gulp.task("watch", function() {
  gulp.watch("src/client/**/*.js", [ "build" ]);
})

gulp.task("build", [ "browserify" ]);
gulp.task("test", [ "lint" ]);
gulp.task("default", [ "build", "test" ]);
