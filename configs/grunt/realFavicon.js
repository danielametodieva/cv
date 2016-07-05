module.exports = {
    options: {
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '14%'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#da532c',
                onConflict: 'override'
            },
            androidChrome: {
                pictureAspect: 'backgroundAndMargin',
                margin: '17%',
                backgroundColor: '#ffffff',
                themeColor: '#ffffff',
                manifest: {
                    name: 'Martin’s CV',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#5bbad5'
            }
        },
        settings: {
            scalingAlgorithm: 'Lanczos',
            errorOnImageTooSmall: false
        }
    },

    // DEV
    dev: {
        src: 'src/images/favicon.png',
        dest: 'dist/dev/assets/favicons'
    },

    // PROD
    prod: {
        src: 'src/images/favicon.png',
        dest: 'dist/prod/assets/favicons'
    }
};