const gulp     = require("gulp");
const uglify   = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
const minHtml  = require("gulp-htmlmin");
const imgOptim = require("gulp-imageoptim");
const babel    = require("gulp-babel");
const inject   = require("gulp-inject");
const del      = require("del");

    //默认任务
    gulp.task("default", ["del","minify-htm", "minify-css", "babel"]);


    //清除dist目录
    gulp.task("del", function () {
        del(["dist/**"]).then(function (paths) {
            console.log(paths);
        })   
    })

    //默认任务
    gulp.task("default", ["minify-htm", "minify-css", "minify-js", "babel"]);

    //压缩js                           √
    gulp.task("minify-js", function () {
        gulp.src(["app/js/vue.js", "app/js/main.js"])
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
    })

    //压缩css                           √
    gulp.task("minify-css", function () {
        gulp.src("app/css/*.css")
            .pipe(cleanCss({
                compatibility: "ie9,+properties.zeroUnits"
            }))
            .pipe(gulp.dest("dist/css"));
    })

    //压缩html                           √
    gulp.task("minify-htm", function () {
        gulp.src("app/*.html")
            .pipe(minHtml({
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true
            }))
            .pipe(gulp.dest("dist"));
    })

    //压缩图片
    gulp.task("minify-img", function () {
        gulp.src("app/images/*")
            .pipe(imgOptim.optimize())
            .pipe(gulp.dest("dist/images"));
    })

    //es6 -> es5                   √
    gulp.task("babel", function () {
        gulp.src("app/js/*.js")
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
    })


