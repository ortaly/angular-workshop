module.exports = function(grunt){
	var config = {
		js: ['src/app/app.js', '!src/app/bundle.js', 'src/app/**/*.js'],
		destFile: 'bundle.js'
	}

	return {
		options: {
	      separator: ';',
	      sourceMap: true
	    },
	    dev: {
	      src: config.js,
	      dest: 'src/app/' + config.destFile,
	    },

	    dist: {
	    	files: {
		    	'dist/app/bundle.js': config.js
		    }
	    }
	}
}