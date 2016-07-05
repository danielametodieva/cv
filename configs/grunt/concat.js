module.exports = {
    dev: {
        options: {
            separator: ';\n\n\n\n'
        },
        src: [
            // External libraries
            'bower_components/css_browser_selector/css_browser_selector.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/jquery/dist/jquery.js',

            // Internal scripts
            'src/scripts/<%= pkg.name %>.js'
        ],
        dest: 'dist/dev/assets/js/<%= pkg.name %>_bundle.js'
    },

    prod: {
        options: {
            separator: ';\n',
            stripBanners: {force: true}
        },
        src: [
            // External libraries
            'bower_components/css_browser_selector/css_browser_selector.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/jquery/dist/jquery.min.js',

            // Internal scripts
            'src/scripts/<%= pkg.name %>.js'
        ],
        dest: 'dist/prod/assets/js/<%= pkg.name %>_bundle.js'
    }
};