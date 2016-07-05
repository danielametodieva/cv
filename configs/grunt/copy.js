module.exports = {

// DEV

    // PDF file
    dev_pdf: {
        files: [{
            expand: true,
            cwd: 'src',
            src: ['cv.pdf'],
            dest: 'dist/dev/'
        }]
    },

    // Certificates
    dev_certificates: {
        files: [{
            expand: true,
            cwd: 'src/certificates',
            src: ['**'],
            dest: 'dist/dev/certificates/'
        }]
    },


// PROD

    // PDF file
    prod_pdf: {
        files: [{
            expand: true,
            cwd: 'src',
            src: ['cv.pdf'],
            dest: 'dist/prod/'
        }]
    },

    // Certificates
    prod_certificates: {
        files: [{
            expand: true,
            cwd: 'src/certificates',
            src: ['**'],
            dest: 'dist/prod/certificates/'
        }]
    }

};