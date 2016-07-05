module.exports = {
    prod: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true
        },
        expand: true,
        cwd: 'dist/prod/',
        src: '*.html',
        dest: 'dist/prod/'
    }
};