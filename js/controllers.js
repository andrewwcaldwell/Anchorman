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

    ////// Controller for INTERESTS //////
    controllers.controller('InterestSettingController', ['$scope', 'NewsService', function ($scope, NewsService) {
        
        // Code to test View / Router
        console.log('Interests Settings View Working');
        
        // Code to Test Factory Link
        console.log(NewsService.silento());
        
        // Code to Un-Bookmark an Articles
        //$scope.clickSendInput = function(input) {NewsService.removeBookmark(input);};
        $scope.clickSendInput = function(input) {console.log(input);
        let a = document.getElementById('interestInput');
        a.value = '';
        };
        
    }]);
    
    ////// Controller for BOOKMARKS //////
    controllers.controller('BookmarkController', ['$scope', 'NewsService', function ($scope, NewsService) {
        
        // Code to test View / Router
        console.log('Bookmarks View Working');
        
        // Code to Test Factory Link
        console.log(NewsService.silento());
        
        // Code to Get Initial Feed Articles
        $scope.news = NewsService.getBookmarks();
        
        // Code to Un-Bookmark an Articles
        $scope.clickSendID = function(ID) {NewsService.removeBookmark(ID);};
    }]);
    
    
}());