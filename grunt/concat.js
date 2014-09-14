module.exports = function(grunt){
	return {
		options: {
	      separator: ';',
	    },
	    dev: {
	      src: ['src/app/app.js', '!src/app/bundle.js', 'src/app/**/*.js'],
	      dest: 'src/app/bundle.js',
	    }
	}
}