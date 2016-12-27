const gulp     = require("gulp"),
      uglify   = require("gulp-uglify"),
      cleanCss = require("gulp-clean-css"),
      minHtml  = require("gulp-htmlmin"),
      imgOptim = require("gulp-imageoptim");

    //默认任务
    gulp.task("default", ["minify-htm", "minify-css", "minify-js"]);

    //压缩js
    gulp.task("minify-js", function () {
        gulp.src("app/js/*.js")
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
    })

    //压缩css
    gulp.task("minify-css", function () {
        gulp.src("app/css/*.css")
            .pipe(cleanCss({
                compatibility: "ie9,+properties.zeroUnits"
            }))
            .pipe(gulp.dest("dist/css"));
    })

    //压缩html
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