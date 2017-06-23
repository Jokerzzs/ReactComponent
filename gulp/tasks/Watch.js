import gulp from 'gulp';
import config from '../../config.js';
import path from 'path';

gulp.task('watch', function () {
    gulp.start('watch-wp', 'watch-layout');
})


gulp.task('watch-wp', function () {
    let less = new Set();
    for (let webpart of config.webparts) {
        less.add(path.join(config.rootpath, webpart.style));
    }
    gulp.watch(Array.from(less), ['buildless-wp']);

    let jss = new Set();
    for (let webpart of config.webparts) {
        jss.add(path.join(config.rootpath, webpart.src));
    }
    gulp.watch(Array.from(jss), ['buildjs-wp']);
})


gulp.task('watch-layout', function () {
    let less = new Set();
    for (let webpart of config.webparts) {
        less.add(path.join(config.rootpath, webpart.style));
    }
    gulp.watch(Array.from(less), ['buildless-wp']);

    let jss = new Set();
    for (let webpart of config.webparts) {
        jss.add(path.join(config.rootpath, webpart.src));
    }
    gulp.watch(Array.from(jss), ['buildjs-wp']);

})
