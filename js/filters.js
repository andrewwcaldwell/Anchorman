module.exports = (function() {
    var moment = require('moment'); 
    var filters = angular.module('NewsAppFilters', []).filter('fromNow', function(){
        return function (input) {
            return moment(input).fromNow();
        };
    });
})();
