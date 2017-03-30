require('superfly-css-task-clean');
require('superfly-css-task-build');
require('superfly-css-task-test');
require('superfly-css-task-deploy');


var PLI = require('superfly-css-pli');
var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch(PLI.SRC_TEST_HTML, ['clean', 'build:css', 'test:css'])
});
