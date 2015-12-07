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
      console.log('scope.post is ', $scope.post)
      var post = new Post($scope.post);
      post.$save(function(data) {
        $scope.posts.unshift(data);
        $scope.post = {};

      });
    };

    //CHANGE BACKGROUND IMAGE WHEN NEW POST ADDED
    $scope.class = "background1";
    var images = ['background2', 'background3', 'background4', 'background5', 'background6', 'background7', 'background8', 'background9', 'background10'];

    $scope.changeBackground = function() {
      var imageNumber = Math.floor(Math.random() * (8 - 0)) + 0;
      $scope.class = images[imageNumber];
      console.log(images[imageNumber]);
    };

    //SHOW COMMENT BOX
    $scope.hidden = true;
    $scope.showComment = function(post, $index) {
      $scope.hidden = false;
    };

    //ADD COMMENT
    $scope.createComment = function(post, index) {
      $scope.hidden = true;
      Post.update({ id: post._id }, function(post) {
        post.comments.push($scope.comment);
        console.log('comment is ', $scope.comment);
        console.log('post is ', post);
      });
    };

    // DELETE A POST
  //   $scope.deletePost = function(post, index) {
  //     Post.remove({ id: post._id }, function(data) {
  //       $scope.posts.splice(index, 1);
  //     });
  //   };
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
