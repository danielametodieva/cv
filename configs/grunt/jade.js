var grunt = require('grunt');

module.exports = {

    // DEV
    dev: {
        options: {
            pretty: true,
            data: {
                debug: true,
                pkg: grunt.file.readJSON('package.json'),
                base: grunt.file.readJSON('src/model/base.json'),
                content: grunt.file.readJSON('src/model/content.json')
            }
        },
        files: {
            'dist/dev/index.html': 'src/markup/<%= pkg.name %>.jade'
        }
    },

    // PROD
    prod: {
        options: {
            pretty: false,
            data: {
                debug: false,
                pkg: grunt.file.readJSON('package.json'),
                base: grunt.file.readJSON('src/model/base.json'),
                content: grunt.file.readJSON('src/model/content.json')
            }
        },
        files: {
            'dist/prod/index.html': 'src/markup/<%= pkg.name %>.jade'
        }
    }
    
};