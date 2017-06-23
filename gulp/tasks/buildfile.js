import gulp from 'gulp';
import config from '../../config.js';
import path from 'path';

let debug = false;

gulp.task('buildfile-dev', function () {
    debug = true;
    build();
});

gulp.task('buildfile', function () {
    build();
});

function build() {
    gulp.start('buildimage', 'buildfont');
}

gulp.task('buildimage', function () {
    for (let image of config.images) {
        gulp.src(image.src)
            .pipe(gulp.dest(debug ? image.output : path.join(config.rootpath, config.prod_root, image.prod_output)));
    }
})

gulp.task('buildfont', function () {
    return gulp.src(config.font.src)
        .pipe(gulp.dest(debug ? config.font.output : path.join(config.rootpath, config.prod_root, config.font.prod_output)));
})
