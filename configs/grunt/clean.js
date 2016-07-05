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

    // PROD
    prod: [
        'dist/prod',
        '!dist/prod/assets/favicons'
    ],

    // FAVICONS
    favicons: [
        'dist/dev/assets/favicons',
        'dist/prod/assets/favicons'
    ],

    // PDF
    pdf: ['dist/prod/cv.pdf'],

    // Certificates
    certificates: ['dist/prod/certificates']

};