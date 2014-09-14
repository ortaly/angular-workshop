module.exports = function(grunt) {
	return {
		options: {
	      asi: true
	    },
	    all: ['./src/app/**/*.js', '!./src/app/bundle.js']
	}
}