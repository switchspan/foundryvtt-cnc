const gulp = require("gulp");
const less = require("gulp-less");
const bump = require("gulp-bump");
const jsonModify = require("gulp-json-modify");
const pkg = require("./package.json");

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const CNC_LESS = ["less/*.less"];
function compileLESS() {
  return gulp.src("less/cnc.less").pipe(less()).pipe(gulp.dest("./"));
}
const css = gulp.series(compileLESS);

/* ----------------------------------------- */
/*  Bump version number
/* ----------------------------------------- */
gulp.task("bump", function () {
  let options = {};
  options.version = pkg.version;
  let downloadFilePath = `https://github.com/switchspan/foundryvtt-cnc/archive/v${pkg.version}.zip`;

  return gulp
    .src(["./system.json"])
    .pipe(bump(options))
    .pipe(jsonModify({ key: "download", value: downloadFilePath }))
    .pipe(gulp.dest("./"));
});

/* ----------------------------------------- */
/*  Bump version number in the download file
/* ----------------------------------------- */
gulp.task("bump-download", function () {
  return gulp.src("./system.json");
});

/* ----------------------------------------- */
/*  Watch Updates
/* ----------------------------------------- */

function watchUpdates() {
  gulp.watch(CNC_LESS, css);
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.default = gulp.series(gulp.parallel(css), watchUpdates);
exports.css = css;
