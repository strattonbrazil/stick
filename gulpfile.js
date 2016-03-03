var gulp = require('gulp');
var electron = require('gulp-electron');
var deepcopy = require("deepcopy");

var packageJson = require('./src/package.json');

options = {
    src: './src',
    packageJson: packageJson,
    release: './release',
    cache: './cache',
    version: 'v0.36.0',
    platforms: ['win32-ia32', 'darwin-x64', 'linux-x64'],
    platformResources: {	    
        darwin: {
            CFBundleDisplayName: packageJson.name,
            CFBundleIdentifier: packageJson.name,
            CFBundleName: packageJson.name,
            CFBundleVersion: packageJson.version,
            icon: 'gulp-electron.icns'
        },
        win: {
            "version-string": packageJson.version,
            "file-version": packageJson.version,
            "product-version": packageJson.version,
            "icon": 'gulp-electron.ico'
        },
        // linux: {
        //     "version-string": packageJson.version,
        //     "file-version": packageJson.version,
        //     "product-version": packageJson.version,
        //     "icon": 'gulp-electron.ico'
        // }
    }
}

gulp.task('build', function() {
    gulp.src("")
    .pipe(electron(options))
    .pipe(gulp.dest(""));
});

gulp.task('package', function() {
    var packageOptions = deepcopy(options);
    packageOptions.packaging = true;

    gulp.src("")
    .pipe(electron(packageOptions))
    .pipe(gulp.dest(""));
});
