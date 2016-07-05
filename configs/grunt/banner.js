module.exports = function(grunt) {
    return {
        string: '/*! <%= pkg.title || pkg.name %>\n' +
        '* <%= pkg.homepage%> (v<%= pkg.version %>)\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */\n'
    };
};