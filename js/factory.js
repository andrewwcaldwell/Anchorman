module.exports = (function() {
    var newsFactory = angular.module('NewsAppFactory', []);
    
    newsFactory.factory('NewsService', function ($http) {
        var news = [];      // all articles
        var current = {};   // current article
        var bookmarks = [];  // bookmarked articles
    
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
            
            /// Function to Deliver News Array to Feed/Input
            getArticles: function () {
                console.log(news);
                return news;
            },
            
            /// Function to Deliver Bookmarks Array to Bookmarks
             getBookmarks: function () {
                console.log(bookmarks);
                return bookmarks;
            },
            
            /// Function to Push Selected Article to Bookmarks Array
            setBookmark: function(input) {
                for (let i = 0; i < news.length; i++) {
                    if (news[i].id === input) {
                        bookmarks.push(news[i]);
                    }
                }
                console.log('bookmark clicked');
                console.log(bookmarks);
                return bookmarks;
            },
            
            /// Function to Pop Selected Article From Bookmarks Array
            removeBookmark: function(input) {
                for (let i = 0; i < bookmarks.length; i++) {
                    if (bookmarks[i].id === input) {
                        bookmarks.splice(i, 1);
                    }
                }
                console.log('un-bookmark clicked');
                console.log(bookmarks);
                return bookmarks;
            },
            
            
            /// Function for Calling in Controller to verify Link-up
            silento: function () {
                return 'Watch me WHIP! now watch me NAE NAE!';
            },
            
        };   
    });

}());