
module.exports = function(grunt) {
   
	grunt.initConfig({
		markdown: {
			all: {
				files: [{
					expand: true,
					src: ['README.md'],
					rename: () => 'index.html'
				}],
				options: {
					template: 'src/templates/main.jst',
					markdownOptions: {
						gfm: true,
						highlight: 'manual'
					}
				}
			}
		},

    /* Clear out the assets directory if it exists */
    clean: {
      dev: {
        src: ['build/assets'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['build/assets']
        },
      },
		},
		
    /* Copy the assets that don't go through any task */
    copy: {
      dev: {
        files: [{
					expand: true,
					cwd: 'src',
          src: ['css/**', 'images/**'],
          dest: 'build/assets/'
        }]
			}
    },
	});

	 grunt.loadNpmTasks('grunt-markdown');
	 grunt.loadNpmTasks('grunt-contrib-clean');
	 grunt.loadNpmTasks('grunt-contrib-copy');
	 grunt.loadNpmTasks('grunt-mkdir');
	 grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'markdown']);
};


