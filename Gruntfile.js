module.exports = function (grunt) {

  // configure
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      transform: [
        ['browserify-shim']
      ],
      browserifyOptions: {
        debug: true
      },
      client: {
        src: ['app/**/*.js'],
        dest: 'web/js/app.js'
      }
    },

    "browser": {
      "jquery": "./bower_components/jquery/dist/jquery.js",
      "angular": "./bower_components/angular/angular.js",
    },

    "browserify-shim": {
      "jquery": {
        "exports": "$"
      },
      "angular": {
        "exports": "angular",
        "depends": "jquery"
      },
    },

    watch: {
        files: 'app/**',
        tasks: ['browserify']
    }
  });

  // load
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // register
  grunt.registerTask('default', ['browserify']);
};