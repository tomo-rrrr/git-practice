const gulp     = require("gulp"),
      uglify   = require("gulp-uglify"),
      cleanCss = require("gulp-clean-css");


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
