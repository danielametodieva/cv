module.exports = {
    options: {
        require: [
            'sass-css-importer',
            'compass/import-once/activate',
            'sass-globbing'
        ],
        force: true,
        outputStyle: 'compressed',
        sassDir: 'src/styles',
        imagesDir: 'src/images',
        javascriptsDir: 'src/scripts'
    },

    dev: {
        options: {
            sourcemap: true,
            cssDir: 'dist/dev/assets/css'
        }
    },

    prod: {
        options: {
            cssDir: 'dist/prod/assets/css',
            specify: 'src/styles/<%= pkg.name %>.scss',
            banner: '<%= banner.string %>'
        }
    }
};