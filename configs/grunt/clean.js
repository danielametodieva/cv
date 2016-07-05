module.exports = {

    // ALL
    all: ['dist'],

    // DEV
    dev: [
        'dist/dev',
        '!dist/dev/assets/favicons'
    ],
    dev_markup:  ['dist/dev/assets/*.html'],
    dev_styles:  ['dist/dev/assets/css'],
    dev_scripts: ['dist/dev/assets/scripts'],
    dev_pdf: ['dist/dev/cv.pdf'],
    dev_certificates: ['dist/dev/certificates'],

    // PROD
    prod: [
        'dist/prod',
        '!dist/prod/assets/favicons'
    ],

    prod_pdf: ['dist/prod/cv.pdf'],
    prod_certificates: ['dist/prod/certificates'],

    // FAVICONS
    favicons: [
        'dist/dev/assets/favicons',
        'dist/prod/assets/favicons'
    ]

};