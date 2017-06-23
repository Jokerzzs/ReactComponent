import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import shim from 'browserify-shim';
import path from 'path';
import uglify from 'gulp-uglify';
import config from '../../config.js';
import rename from 'gulp-rename';
import del from 'del';
import gulpconcat from 'gulp-concat';
import es from 'event-stream';
import streamify from 'gulp-streamify';

let debug = false;

gulp.task('buildjs-dev', function () {
    debug = true;
    build();
});

gulp.task('buildjs', function () {
    build();
});

function build() {
    gulp.start('buildjs-wp', 'buildjs-layout', 'buildjs-webglobal', 'copy-jslibrary', 'concat-js');
}

gulp.task('buildjs-wp', function () {
    let srcs = new Set();
    let streamArr = [];
    for (let webpart of config.webparts) {
        if (!debug && !webpart.prod_include) {
            continue;
        }
        for (let src of webpart.src) {
            srcs.add(path.join(config.rootpath, src));
        }
        let stream = bundleJs(webpart.name + '.js', Array.from(srcs),
            debug ? path.join(config.rootpath, webpart.output) : path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput));
        streamArr.push(stream);
    }
    return es.merge(streamArr);
})

gulp.task('buildjs-layout', function () {
    let srcs = new Set();
    for (let layout of config.layouts) {
        if (!debug && !layout.prod_include) {
            continue;
        }
        for (let src of layout.src) {
            srcs.add(path.join(config.rootpath, src));
        }
        bundleJs(layout.name + '.js', Array.from(srcs),
            debug ? path.join(config.rootpath, layout.output) : path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput));
    }

})

gulp.task('buildjs-webglobal', function () {
    let srcs = new Set();
    let streamArr = [];
    for (let web of config.webglobal) {
        if (!debug && !web.prod_include) {
            continue;
        }
        for (let src of web.src) {
            srcs.add(path.join(config.rootpath, src));
        }
        let stream = bundleJs(web.name + '.js', Array.from(srcs),
            debug ? path.join(config.rootpath, web.output) : path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput));
        streamArr.push(stream);
    }
    return es.merge(streamArr);
})

gulp.task('copy-jslibrary', function () {
    for (let library of config.jslibrary) {
        if (!debug || !library.prod_include) {
            continue;
        }
        CopyJs(library.name + '.js',
            path.join(config.rootpath, library.src),
            debug ? path.join(config.rootpath, library.output) : path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput));
    }
    return;
})

gulp.task('concat-js', ['buildjs-wp', 'buildjs-layout', 'buildjs-webglobal', 'copy-jslibrary'], function () {
    if (!debug) {
        for (let concat of config.concats) {
            let srcs = concat.src.map(function (item) {
                return path.join(config.rootpath, item);
            })
            gulp.src(srcs)
                .pipe(streamify(uglify()))
                .pipe(gulpconcat(path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput, concat.name + '.tmp.js')))
                .pipe(rename(concat.name + '.js'))
                .pipe(gulp.dest(path.join(config.rootpath, config.prod_root, config.prod_webpartScriptoutput), { overwrite: true }));
        }
    }
})

function CopyJs(name, src, dest) {
    del(path.join(dest, name), { force: true });

    gulp.src(src)
        .pipe(gulp.dest(path.dirname(src)))
        .pipe(rename(name))
        .pipe(gulp.dest(path.join(dest)));
    return;
}

function bundleJs(name, srcs, dest) {
    del(path.join(dest, name), { force: true });
    var stream = browserify(srcs, {
        standalone: 'MyLibrary'
    })
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .transform(shim)
        .bundle()
        .pipe(source(name))
    if (!debug) {
        //stream.pipe(streamify(uglify()));
    }
    return stream.pipe(gulp.dest(dest));
}

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('watchjs', (callback) => {
    gulp.watch(['./webparts/**/*.jsx', './layoutks/**/*.jsx'], ['buildjs']);
});
