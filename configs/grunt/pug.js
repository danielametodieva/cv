var grunt = require('grunt');

module.exports = {
    options: {
        pretty: grunt.option('target') !== 'prod'
    },
    en: {
        options: {
            data: {
                debug: grunt.option('target') !== 'prod',
                pkg: grunt.file.readJSON('package.json'),
                base: grunt.file.readJSON('src/model/base.json'),
                data: grunt.file.readJSON('src/model/en/data.json'),
                content: grunt.file.readJSON('src/model/en/content.json'),
                labels: grunt.file.readJSON('src/model/en/labels.json')
            }
        },
        files: {
            'dist/index.html': 'src/markup/<%= pkg.name %>.pug'
        }
    },
    bg: {
        options: {
            data: {
                debug: grunt.option('target') !== 'prod',
                pkg: grunt.file.readJSON('package.json'),
                base: grunt.file.readJSON('src/model/base.json'),
                data: grunt.file.readJSON('src/model/bg/data.json'),
                content: grunt.file.readJSON('src/model/bg/content.json'),
                labels: grunt.file.readJSON('src/model/bg/labels.json')
            }
        },
        files: {
            'dist/bg/index.html': 'src/markup/<%= pkg.name %>.pug'
        }
    }
};