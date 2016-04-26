module.exports = (function() {
    var controllers = angular.module('NewsAppControllers', []);
    
    
    controllers.controller('LiveStreamController', ['$scope', 'NewsService', function ($scope, NewsService) {
        console.log('Live Stream View Working');
        console.log(NewsService.silento());
        $scope.articles = [];
        //$scope.pancake = '';
        $scope.news = NewsService.getArticles();
    
//      function loadArticles(articles) {
//          $scope.news = articles;
//      }
//    
//      $scope.news = [];
//      NewsService.getArticles(loadArticles);
//      $scope.current = {
//          title: 'none yet'
//      };
    }]);

    controllers.controller('IntrestSettingController', ['$scope', 'NewsService', function ($scope, NewsService) {
        console.log('Intrests Settings View Working');
        console.log(NewsService.silento());
    }]);

    controllers.controller('BookmarkController', ['$scope', 'NewsService', function ($scope, NewsService) {
        console.log('Bookmarks View Working');
        console.log(NewsService.silento());
    }]);
    
    
}());