const gulp = require('gulp');
const path = require('path');
const package = require('./package.json');
const fs = require('fs');
const gulpWatch = require('gulp-watch');
const gulpBump = require('gulp-bump');
const gulpNodemon = require('gulp-nodemon');
const gulpClean = require('gulp-clean');
const gulpAll = require('gulp-all');
const gulpTypescript = require("gulp-typescript").createProject('tsconfig.json');

const DIST_FOLDER = "./bin";

gulp.task("clean", () => {
    return gulp.src(`${DIST_FOLDER}`).pipe(gulpClean({
        force: true
    }));
});

gulp.task("build", ['clean'], () => {
    return gulp.src(["typings/**/*.ts", "src/**/*.ts"])
        .pipe(gulpTypescript())
        .pipe(gulp.dest(`${DIST_FOLDER}`));
});

gulp.task("start", ["build"], () => {
    return gulpNodemon({
        exec: 'node --debug=5858',
        ignore: '*',
        script: `${DIST_FOLDER}/index.js`
    });
});