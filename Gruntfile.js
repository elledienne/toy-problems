module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    jshint: {
      files: [
       'src/**/*.js'
      ],
      options: {
        force: 'false',
        jshintrc: '.jshintrc',
        ignores: [
          'public/lib/**/*.js',
          'public/dist/**/*.js'
        ]
      }
    },

    jscs: {
      src: "src/**/*.js",
      options: {
        config: ".jscsrc",
        esnext: false, // If you use ES6 http://jscs.info/overview.html#esnext
        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        fix: true, // Autofix code style violations when possible.
        // requireCurlyBraces: [ "if" ]
      }
    },

    watch: {
      scripts: {
        files: [
          'src/**/*.js'
        ],
        tasks: [
          'jshint',
          'jscs',
          'mochaTest'
        ]
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks("grunt-jscs");

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('isThisGuySafe', [
    'jshint',
    'jscs',
    'mochaTest'
  ]);


};
