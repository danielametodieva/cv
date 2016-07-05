module.exports = {
    options: {
        override: function(detail, include) {
            if (detail.task === 'jade') {
                return include(true);
            } else {
                return include(false);
            }
        }
    }
};