const gulp     = require("gulp");
const uglify   = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
const minHtml  = require("gulp-htmlmin");
const imgOptim = require("gulp-imageoptim");
const babel    = require("gulp-babel");
const inject   = require("gulp-inject");

    //默认任务
    gulp.task("default", ["minify-htm", "minify-css", "minify-js", "babel"]);

    //压缩js                           √
    gulp.task("minify-js", () => {
        gulp.src(["app/js/vue.js", "app/js/main.js"])
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
    })

    //压缩css                           √
    gulp.task("minify-css", () => {
        gulp.src("app/css/*.css")
            .pipe(cleanCss({
                compatibility: "ie9,+properties.zeroUnits"
            }))
            .pipe(gulp.dest("dist/css"));
    })

    //压缩html                           √
    gulp.task("minify-htm", () => {
        gulp.src("app/*.html")
            .pipe(minHtml({
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true
            }))
            .pipe(gulp.dest("dist"));
    })

    //压缩图片
    gulp.task("minify-img", () => {
        gulp.src("app/images/*")
            .pipe(imgOptim.optimize())
            .pipe(gulp.dest("dist/images"));
    })

    //es6 -> es5                   √
    gulp.task("babel", () => {
        gulp.src("app/js/es6.js")
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
    })