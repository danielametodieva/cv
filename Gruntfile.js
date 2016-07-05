module.exports = function(grunt) {
    var path = require('path');

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'configs/grunt')
    });

    grunt.registerTask('domain', function() {
        grunt.file.write('dist/prod/CNAME', 'cv.daniela.pro');
    });
};