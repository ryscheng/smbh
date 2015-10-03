var gulp = require("gulp");
var babel = require("gulp-babel");
var eslint = require('gulp-eslint');
//var concat = require("gulp-concat");
//var sourcemaps = require("gulp-sourcemaps");

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("static/build/"));
});

gulp.task("lint", function() {
  return gulp.src([ "src/**/*.js" ])
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("build", [ "babel" ]);
gulp.task("test", [ "lint" ]);
gulp.task("default", [ "build", "test" ]);
