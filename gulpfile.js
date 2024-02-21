const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify-es").default;
const rigger = require('gulp-rigger');
const browserSync = require("browser-sync").create();
const DIST_PATH = "./dist";

function css() {
  return gulp
    .src(["./src/scss/index.scss"])
    .pipe(sass({ includePaths: ["src/scss"] }).on("error", sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest(`${DIST_PATH}/css`))
    .pipe(browserSync.stream());
}
function scripts() {
  return gulp
    .src(["./src/**/index.js"])
    .pipe(uglify())
    .pipe(gulp.dest(`${DIST_PATH}/js`));
}

function html() {
  return gulp
    .src("./src/*.html")
    .pipe(gulp.dest(`${DIST_PATH}`))
    .pipe(browserSync.stream());
}

function fonts() {
  return gulp.src("./src/vendor/fonts/**/*").pipe(gulp.dest(`${DIST_PATH}`));
}
function images() {
  return gulp.src("./src/images/**/*").pipe(gulp.dest(`${DIST_PATH}/images`));
}

// function  gulp.task('default', function () {
//   gulp.src('app/*.js')
//       .pipe(rigger())
//       .pipe(gulp.dest('build/'));
// });

function watching() {
  gulp.watch(["./src/scss/*.scss"], css);
  gulp.watch(["./src/blocks/**/*.scss"], css);
  gulp.watch(["./src/pages/index.js"], scripts);
  gulp.watch(["./src/images/**/*"], images);
  gulp.watch(["./src/*.html"], html);
}
function browsersync() {
  browserSync.init({
    server: {
      baseDir: `${DIST_PATH}`,
    },
  });
}
function cleanDist() {
  return gulp.src("dist").pipe(clean());
}
// exports.assets = gulp.series(fonts, images, public);
exports.cleanDist = cleanDist;
exports.default = gulp.parallel(
  css,
  html,
  fonts,
  images,
  scripts,
  browsersync,
  watching
);
