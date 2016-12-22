/**
 * Created by mamoruohara on 12/19/16.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'public/css/styles.css' : 'public/sass/styles.scss'
                } //files
            }//dist
        }, //sass
        watch: {
            source: {
                files: ['public/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true, // needed to run LiveReload
                } //options
            } //source
        } //watch
    }); //config
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
};
