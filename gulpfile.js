const gulp = require("gulp");
const less = require("gulp-less");
const bump = require("gulp-bump");
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

  return gulp.src(["./system.json"]).pipe(bump(options)).pipe(gulp.dest("./"));
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
