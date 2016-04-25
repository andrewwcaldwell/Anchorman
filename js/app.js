var app = angular.module('AnchormanApp', []);


app.controller('NewsArticleList', ['$scope', 'NewsService', function ($scope, NewsService) {
    
   
    
//    function loadArticles(articles) {
//        $scope.news = articles;
//    }
//    
//    $scope.news = [];
//    NewsService.getArticles(loadArticles);
//    $scope.current = {
//        title: 'none yet'
//    };
     $scope.articles = [];
     $scope.pancake = '';
    
    
    $scope.news = NewsService.getArticles();
}]);

app.factory('NewsService', function ($http) {
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
        }
    };   
});


