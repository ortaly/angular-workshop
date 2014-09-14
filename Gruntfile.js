module.exports = function(grunt) {

  //configure grunt
  var gruntConfig = {};

  gruntConfig['jshint'] = require('./grunt/jshint.js')(grunt);
  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // run in cmd:$ grunt
  grunt.registerTask('default', ['jshint']);
};