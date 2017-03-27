var grunt = require('grunt');

module.exports = {
  options: {
    require: [
      'sass-css-importer',
      'compass/import-once/activate',
      'sass-globbing'
    ],
    force: true,
    outputStyle: 'compressed',
    sourcemap: grunt.option('target') !== 'prod',
    sassDir: 'src/styles',
    javascriptsDir: 'src/scripts',
    cssDir: 'dist/assets/css',
    imagesDir: 'src/images',
    banner: grunt.option('target') !== 'prod' ? false : '<%= banner %>'
  },

  en: {
    options: {
      specify: 'src/styles/en.scss'
    }
  },

  bg: {
    options: {
      specify: 'src/styles/bg.scss'
    }
  }
};