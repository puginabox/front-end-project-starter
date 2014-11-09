module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-contrib-uglify'); // load uglify plugin
        grunt.loadNpmTasks('grunt-contrib-watch'); // load watch plugin
        grunt.loadNpmTasks('grunt-contrib-compass'); // load compass plugin
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
                                'js/modules/*.js'
                            ]
                        } //files
                    } //my_target
                },
                compass: {
                    dev: {
                        options: {
                            config: 'config.rb' // the compass config file
                        } //options
                    } //dev
                }, //compass
                //====================================================== watch it all ==========================|
                watch: {
                    options: {
                        livereload: true
                    },
                    scripts: {
                        files: ['js/**/*.js'], // files to be watched
                        tasks: ['uglify'] //  tasks to run on change
                    }, //scriptS
                    //====================================================== Sass pre-processing ===================|      
                    sass: {
                        files: ['dev/sass/*.scss'],
                        tasks: ['compass:dev']
                    }, //sass
                    //============================================== watch for html page changes ===================|        
                    html: {
                        files: ['*.html'] // this gruntfile is in the same dir as html pages
                    }



                } //watch
            }) //initConfig
            //=================================== initial task (watch) when grunt starts ===================|    
        grunt.registerTask('default', 'watch');
    } //exports
