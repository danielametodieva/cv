module.exports = {
    options: {
        livereload: false,
        event: ['changed', 'added', 'deleted']
    },

    markup: {
        files: ['src/markup/**/*.jade', 'src/model/**/*.json'],
        tasks: ['update_markup']
    },

    styles: {
        files: ['src/styles/**/*.scss', 'src/images/icons/**/*'],
        tasks: ['update_styles']
    },

    scripts: {
        files: ['src/scripts/**/*.js'],
        tasks: ['update_scripts']
    },

    favicons: {
        files: ['src/images/favicon.png'],
        tasks: ['favicons']
    }
};