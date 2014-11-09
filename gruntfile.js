module.exports = function(grunt) {

        grunt.initConfig({

                uglify: {
                    my_target: {
                        files: {
                            'www/app.js': [
                                'js/lib/jquery/dist/jquery.min.js',
                                'js/lib/angular/angular.min.js',
                                'js/lib/angular-route/angular-route.min.js',
                                'js/app.js',
                                'js/directives/*.js',
                                'js/controllers/*.js',
                                'js/services/*.js',
                                'js/modules/*.js',
                                'js/*.js'
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
                //====================================================== WATCHING ==========================|
                watch: {
                    options: {
                        livereload: true
                    },
                    scripts: {
                        files: ['js/**/*.js'], // watched FILES
                        tasks: ['uglify'] //  tasks run on change
                    }, //scriptS
                    //---------------------------------------- Sass pre-processing ------------------|      
                    sass: {
                        files: ['dev/sass/*.scss'],
                        tasks: ['compass:dev']
                    }, //sass
                    //----------------------------------------  watch for html changes ------------------|   
                    html: {
                        files: ['*.html'] // this gruntfile is in the same dir as html pages
                    }
                } //watch
            }) //initConfig

        //====================================================== LOADING TASKS ==========================|
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');

        //---------------------------------------- initial task (watch) when grunt starts ------------------|     
        grunt.registerTask('default', 'watch');
    } //exports
