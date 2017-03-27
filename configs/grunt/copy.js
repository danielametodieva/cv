module.exports = {

  // Resumes
  resumes: {
    files: [{
      expand: true,
      cwd: 'src/attachments/resumes',
      src: ['**/*.*'],
      dest: 'dist/resumes'
    }]
  },

  // Certificates
  certificates: {
    files: [{
      expand: true,
      cwd: 'src/attachments/certificates',
      src: ['**/*.*'],
      dest: 'dist/certificates'
    }]
  }

};