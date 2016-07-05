module.exports = {
    
    // DEV
    dev : {
        app: 'Google Chrome',
        path: 'http://localhost:8001'
    },

    // PROD
    prod : {
        app: 'Google Chrome',
        path: 'http://<%= pkg.name %>.daniela.pro'
    }
};