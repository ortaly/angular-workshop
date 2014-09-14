module.exports = function(grunt){
	return {
		options: {
	      separator: ';',
	    },
	    dev: {
	      src: ['src/app/**/*.js'],
	      dest: 'src/app/bundle.js',
	    }
	}
}