module.exports = {

    // PDF file
    pdf: {
        files: [{
            expand: true,
            cwd: 'src',
            src: ['cv.pdf'],
            dest: 'dist/prod/'
        }]
    },

    // Certificates
    certificates: {
        files: [{
            expand: true,
            cwd: 'src/certificates',
            src: ['**'],
            dest: 'dist/prod/certificates/'
        }]
    }

};