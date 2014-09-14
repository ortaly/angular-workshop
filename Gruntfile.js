module.exports = function(grunt) {

  //configure grunt
  var gruntConfig = {};

  gruntConfig['jshint'] = require('./grunt/jshint.js')(grunt);
  gruntConfig['concat'] = require('./grunt/concat.js')(grunt);
  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // run in cmd:$ grunt
  grunt.registerTask('default', ['jshint', 'concat']);
  grunt.registerTask('build', ['jshint', 'concat:dist']);
};