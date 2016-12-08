// Gruntfile.js
// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({
    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },
      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', '**/*.js']
    },
    // Minification for js
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'js/main.min.js': ['**/*.js']
        }
      }
    },
    //Compile LESS to CSS
    less: {
      build: {
        files: {
          'css/style.css': 'css/*.less'
        }
      }
    },
    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> \n*/\n'
      },
      build: {
        files: {
          'css/style.min.css': 'css/style.css'
        }
      }
    },
    //Make directories
    mkdir: {
      all: {
        options: {
          create: ['css', 'images', 'js']
        },
      },
    },
    // configure watch to auto update ----------------
    watch: {
      // for stylesheets, watch css and less files
      // only run less and cssmin
      stylesheets: {
        files: ['css/*.less'],
        tasks: ['less'/*'cssmin'*/]
      },
      // for scripts, run jshint and uglify
      scripts: {
        files: 'js/*.js',
        tasks: [/*'jshint', 'uglify'*/]
      }
    },
    start: {
      tasks: ['mkdir']
    },
    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
    // all of our configuration will go here
  });
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']); 
    grunt.registerTask('start', ['mkdir']); 
    grunt.registerTask('watch', [/*'jshint', 'uglify', 'cssmin',*/ 'less']); 
  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-watch');
};