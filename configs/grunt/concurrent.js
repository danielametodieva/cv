module.exports = {

  build: [
    // favicons
    ['realFavicon'],

    // markup
    ['pug'],

    // styles
    ['stripCssComments', 'sass'],

    // scripts
    ['concat', 'uglify'],

    // resumes
    ['clean:resumes', 'copy:resumes'],

    // certificates
    ['clean:certificates', 'copy:certificates']
  ],

  prod: [
    'htmlmin'
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]

};