//// Set Module in IFFE so it immediately "unpacks" once required in app.js
module.exports = (function() {
    var newsFactory = angular.module('NewsAppFactory', []);
    
    newsFactory.factory('NewsService', function ($http, $q) {
        var news = [];       // all articles
        var current = {};    // current article
        var bookmarks = [];  // bookmarked articles
        var interests = [];  // all interests
        var publishers = []; // all publishers
        var combo = [];
        
        
        /// THE KAMEHAMEHA PROMISE FOR API AJAX
        /// CALLS FEED AND PUBLISHER AND BLENDS INTO ONE 
        var feed = $http({
            url: 'http://chat.queencityiron.com/api/news/latest',
            method: 'get'
        });
        
        var pubs = $http({
            url: 'http://chat.queencityiron.com/api/publishers',
            method: 'get'
        });
        
        $q.all([feed, pubs]).then(function(results) {
            
            for (let i = 0; i < results[0].data.stories.length; i++) {
                results[0].data.stories[i].provider = '';
                results[0].data.stories[i].logo = '';
                
                for (let j = 0; j < results[1].data.providers.length; j++) {
                    
                    if (results[0].data.stories[i].providerId === results[1].data.providers[j].id) {
                        results[0].data.stories[i].provider = results[1].data.providers[j].name;
                        results[0].data.stories[i].logo = results[1].data.providers[j].logo;
                    }
                }
            }
            
            for (let i = 0; i < results[0].data.stories.length; i++) {
                news.push(results[0].data.stories[i]);
            }
        });
        
        //// THESE CALLS TO BOTH PUBLISHER AND FEED APIS CAN BE CANNED
        /*// ON-LOAD REQUEST TO NEWS FEED API
        $http({
            url: 'http://chat.queencityiron.com/api/news/latest',
            method: 'get'
        }).then(function (results) {
            for (let i = 0; i < results.data.stories.length; i++) {
                news.push(results.data.stories[i]);
            }
            //        news = results.data.stories
        });
        
        /// ON-LOAD REQUEST TO PROVIDERS API
        $http({
            url: 'http://chat.queencityiron.com/api/publishers',
            method: 'get'
        }).then(function (results) {
            for (let i = 0; i < results.data.providers.length; i++) {
                publishers.push(results.data.providers[i]);
            }
            
        }); */
    
        /// FACTORY RETURN OBJECT 
        return {
            
            /// Function to Deliver News Array to Feed/Input
            getArticles: function () {
                console.log(news);
                return news;
            },
            
            /// Function to Deliver Bookmarks Array to Bookmarks Controller
             getBookmarks: function () {
                console.log(bookmarks);
                return bookmarks;
            },
            
            /// Function to Add Selected Article to Bookmarks Array
            setBookmark: function(input) {
                for (let i = 0; i < news.length; i++) {
                    if (news[i].id === input) {
                        bookmarks.push(news[i]);
                    }
                }
                console.log('Add Bookmark Clicked')
                console.log(bookmarks);
                return bookmarks;
            },
            
            /// Function to Remove Selected Article From Bookmarks Array
            removeBookmark: function(input) {
                for (let i = 0; i < bookmarks.length; i++) {
                    if (bookmarks[i].id === input) {
                        bookmarks.splice(i, 1);
                    }
                }
                console.log('Remove Bookmark Clicked');
                console.log(bookmarks);
                return bookmarks;
            },
            
            /// Function to Deliver Interests Array to Interests Controller
             getInterests: function () {
                console.log(interests);
                return interests;
            },
            
            /// Function to Add New Interest to Interests Array
            addInterest: function(input) {
                interests.push(input);
                /*for (let i = 0; i < interests.length; i++) {
                    if (interests[i] !== input) {
                        interests.push(input);
                    }
                }*/
                console.log('Add To Interests Clicked')
                console.log(interests);
                return interests;
            },
            
            /// Functino to Remove Interest from Interests 
            removeInterests: function(input) {
                for (let i = 0; i < interests.length; i++) {
                    if (interests[i] === input) {
                        interests.splice(i, 1);
                    }
                }
                console.log('Removed From Interests clicked');
                console.log(interests);
                return interests;
            },
            
            /// Function for Calling in Controller to verify Link-up
            silento: function () {
                return 'Watch me WHIP! now watch me NAE NAE!';
            },
            
            /// Function to Deliver Publishers
            getPublishers: function () {
                console.log(publishers);
                return publishers;
            },

            
        };   
    });

}());















