module.exports = {

    // INIT
    init_dev: [
        'start_dev_markup',
        'start_dev_styles',
        'start_dev_scripts',
        'copy:dev_pdf',
        'copy:dev_certificates'
    ],
    init_prod: [
        'start_prod_markup',
        'start_prod_styles',
        'start_prod_scripts',
        'copy:prod_pdf',
        'copy:prod_certificates'
    ],

    // DEV
    dev: [
        'dev_markup',
        'dev_styles',
        'dev_scripts',
        'dev_pdf',
        'dev_certificates'

    ],

    // PROD
    prod: [
        'prod_markup',
        'prod_styles',
        'prod_scripts',
        'prod_pdf',
        'prod_certificates',
        'domain'
    ]

};