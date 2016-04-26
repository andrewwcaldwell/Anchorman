module.exports = (function() {
    var newsFactory = angular.module('NewsAppFactory', []);
    
    newsFactory.factory('NewsService', function ($http) {
        var news = [];      // all articles
        var current = {};   // current article
    
        // not done
        $http({
            url: 'http://chat.queencityiron.com/api/news/latest',
            method: 'get'
        }).then(function (results) {
            for (let i = 0; i < results.data.stories.length; i++) {
                news.push(results.data.stories[i]);
            }
            //        news = results.data.stories
        });
    
        return {
            getArticles: function () {
                return news;
            },
        
            silento: function () {
                return 'Watch me WHIP! now watch me NAE NAE!';
            }
        };   
    });

}());