module.exports = function(grunt) {

  //configure grunt
  var gruntConfig = {};

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // run in cmd:$ grunt
  grunt.registerTask('default', ['jshint']);
};