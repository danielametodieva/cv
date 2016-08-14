module.exports = {
    dev: {
        app: 'Google Chrome',
        path: 'http://localhost:8000'
    },

    prod: {
        app: 'Google Chrome',
        path: 'http://<%= pkg.name %>.daniela.pro'
    },

    build: {
        app: 'Google Chrome',
        path: 'https://travis-ci.org/danielametodieva/<%= pkg.name %>/builds'
    },

    repo: {
        app: 'Google Chrome',
        path: 'https://github.com/danielametodieva/<%= pkg.name %>'
    }
};