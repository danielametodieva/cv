module.exports = {
    css_selector: {
        src: [
            'dist/dev/assets/js/<%= pkg.name %>_bundle.js',
            'dist/prod/assets/js/<%= pkg.name %>_bundle.js'
        ],
        overwrite: true,
        replacements: [{
            from: /console\.log\(.*?\)/,
            to: ''
        },
        {
            from: /console\.debug\(.*?\)/,
            to: ''
        }]
    }
};