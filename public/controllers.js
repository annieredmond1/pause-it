/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  .controller('PostsIndexCtrl', ['Post', '$scope', '$location', '$http', function (Post, $scope, $location, $http) {
    // GET POSTS
    $scope.posts = Post.query();

    // CREATE A POST    
    $scope.createPost = function() {
      var post = new Post($scope.post)
      post.$save(function(data) {
        $scope.posts.unshift(data)
        $scope.post = {};
      });
    };

    // DELETE A POST
    $scope.deletePost = function(post, index) {
      Post.remove({ id: post._id }, function(data) {
        $scope.posts.splice(index, 1);
      });
    };
  }])

  .controller('MusicSearch', function($http, $window, $scope) {
    $scope.searchMusic = function() {
      var term = { term: $scope.term };
      $http.post($window.location.origin + '/api/music/search', term)
        .success(function(response) {
          $scope.tracks = response['tracks']['items'];
        })
        .error(function(response) {
          console.log(response);
        });
    };
  });

  // .controller('GameCtrl', function($http, $window, $scope, $state) {

  //     // $scope.question1 = {
  //     //     name: 'Question 1',
  //     //     code: 'this is the code',
  //     //     answer: 'a',
  //     //     current: 'false'
  //     // };
  //     // $scope.question2 = {
  //     //     name: 'Question 2',
  //     //     code: 'this is the code',
  //     //     answer: 'c',
  //     // };
  //     // $scope.hideQuestion1 = true;
  //     // $scope.hideQuestion2 = true;
  //     $scope.gameTemplate = {
  //       id: '1',
  //       rounds: [
  //       {
  //         name: 'Round 1',
  //         code: 'this is the code',
  //         answer: 'a'
  //       }, 
  //       {
  //         name: 'Round 2',
  //         code: 'this is the code',
  //         answer: 'c'
  //       }
  //       ]
  //     };

  //     $scope.game = {
  //       id: '1',
  //       score: 0
  //     };

  //     $scope.newGame = function() {
  //       console.log('clicked new game');
  //       $state.go('game-play');
        
  //     };
  // })
  // ;
