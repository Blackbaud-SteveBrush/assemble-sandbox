'use strict';

module.exports = function (grunt) {
    grunt.task.loadNpmTasks('stache-barebones');
    grunt.task.registerTask('default', function() {
        grunt.task.run('serve');
    });
};
