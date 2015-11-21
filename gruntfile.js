module.exports = function (grunt) {
    grunt.initConfig({
        assemble: {
            site: {
                options: {
                    layout: './layouts/default.hbs'
                },
                src: ['pages/*.hbs'],
                dest: './site/'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: './site/pages/css',
                    ext: '.css'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './site/pages/',
                    livereload: true
                }
            },
        },
        watch: {
            pages: {
                files: ['pages/*.hbs', 'layouts/*.hbs'],
                tasks: ['assemble:site']
            },
            styles: {
                files: ['styles/*.scss'],
                tasks: ['sass:dist']
            }
        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['assemble:site', 'sass:dist']);
    grunt.registerTask('serve', ['assemble:site', 'sass:dist', 'connect:server', 'watch']);
};
