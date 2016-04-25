(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{}]},{},[1])