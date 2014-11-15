module.exports = function(grunt) {

        grunt.initConfig({

                uglify: {
                    my_target: {
                        files: {
                            'main.js': [
                                'js/lib/jquery/dist/jquery.min.js',
                                'js/lib/modernizr/modernizr.js',
                                'js/lib/angular/angular.min.js',
                                'js/lib/angular-route/angular-route.min.js',
                                'js/app.js',
                                'js/directives/*.js',
                                'js/controllers/*.js',
                                'js/services/*.js',
                                'js/modules/*.js'
                            ]
                        } //files
                    } //my_target
                },
                compass: {
                    dev: {
                        options: {
                            config: 'config.rb' // the Compass config file
                        } //options
                    } //dev
                }, //compass
                copy: {
                    html: {
                        src: 'index.html',
                        dest: 'www/index.html'
                    },
                    js: {
                        src: 'js/main.js',
                        dest: 'www/main.js'
                    }
                },
                // copy: {
                //     html: {
                //         files: {
                //             "index.html": "<%= files.html.src %>",
                //             "www/index.html": "<%= files.html.src %>"
                //         }
                //     }
                // },

                server: {
                    base: "" + (process.env.SERVER_BASE || 'www'),
                    web: {
                        port: 8000
                    }
                },
                //====================================================== WATCHING ==========================|
                watch: {
                    options: {
                        livereload: true
                    },
                    scripts: {
                        files: ['js/**/*.js'], // watched FILES
                        tasks: ['uglify'] //  tasks run on change
                    }, //scriptS
                    sass: {
                        files: ['dev/sass/*.scss'],
                        tasks: ['compass:dev']
                    }, //sass
                    html: {
                        files: ['*.html'],
                        tasks: ['copy']
                    }
                } //watch
            }) //initConfig

        //====================================================== LOADING TASKS ==========================|
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('express');
        // grunt.loadNpmTasks('compression'); gzip server compression nto working



        grunt.loadTasks("tasks");

        //---------------------------------------- initial task (watch) when grunt starts ------------------|     
        grunt.registerTask('default', ['copy', 'server', 'watch']);
    } //exports
