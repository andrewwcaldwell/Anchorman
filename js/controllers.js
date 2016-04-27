module.exports = (function() {
    var controllers = angular.module('NewsAppControllers', []);
    
    ////// Controller for FEED / STREAM //////
    controllers.controller('LiveStreamController', ['$scope', 'NewsService', function ($scope, NewsService) {
        
        // Code to test View / Router
        console.log('Live Stream View Working');
        
        // Code to Test Factory Link
        console.log(NewsService.silento());
        
        // SADIE CODE BELOW, WHY???
        $scope.articles = [];
        //$scope.pancake = '';
        
        // Code to Get Initial Feed Articles
        $scope.news = NewsService.getArticles();
        
        // Code to Bookmark an Article
        $scope.clickSendID = function(ID) {NewsService.setBookmark(ID);};
        
        
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

    ////// Controller for INTRESTS //////
    controllers.controller('IntrestSettingController', ['$scope', 'NewsService', function ($scope, NewsService) {
        
        // Code to test View / Router
        console.log('Intrests Settings View Working');
        
        // Code to Test Factory Link
        console.log(NewsService.silento());
    }]);
    
    ////// Controller for BOOKMARKS //////
    controllers.controller('BookmarkController', ['$scope', 'NewsService', function ($scope, NewsService) {
        
        // Code to test View / Router
        console.log('Bookmarks View Working');
        
        // Code to Test Factory Link
        console.log(NewsService.silento());
    }]);
    
    
}());