module.exports = function(grunt){
	var config = {
		js: ['src/app/app.js', '!src/app/bundle.js', 'src/app/**/*.js']
	};

	return {
		options: {
	      separator: ';',
	      sourceMap: true
	    },
	    dev: {
	      src: config.js,
	      dest: 'src/app/<%= paths.build.js %>'
	    },

	    dist: {
	    	files: {
		    	'dist/app/<%= paths.build.js %>': config.js
		    }
	    }
	}
}