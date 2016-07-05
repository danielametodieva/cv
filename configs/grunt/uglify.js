module.exports = {
    
    options: {
        preserveComments: false
    },

    // DEV
    dev: {
        options: {
            sourceMap: true,
            compress: {
                drop_debugger: false
            }
        },
        src:  'dist/dev/assets/js/<%= pkg.name %>_bundle.js',
        dest: 'dist/dev/assets/js/<%= pkg.name %>.js'
    },

    // PROD
    prod: {
        options: {
            banner: '<%= banner.string %>\n',
            sourceMap: false,
            compress: {
                drop_console: true
            }
        },
        src:  'dist/prod/assets/js/<%= pkg.name %>_bundle.js',
        dest: 'dist/prod/assets/js/<%= pkg.name %>.js'
    }

};