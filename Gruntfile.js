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
        tasks: ['browserify', 'copy']
    },

    copy: {
      templates: {    // copy template files to the shared templates folder in web
        files: [{
          src: 'app/**/templates/*.html',
          dest: 'web/templates/',
          flatten: true,
          expand: true
        }]
      }
    }
  });

  // load
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // register
  grunt.registerTask('default', ['browserify', 'copy']);
};