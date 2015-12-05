/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'ngResource',
                         'myApp.controllers',
                         'myApp.services'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // .state('posts', {
      //   url: "/",
      //   templateUrl: 'templates/posts-index',
      //   controller: 'PostsIndexCtrl'
      // })

      .state('post', {
        url: "/posts/:id",
        templateUrl: 'templates/posts-show',
        controller: 'PostsShowCtrl'
      })
      .state('home', {
        url: "/",
        templateUrl: 'templates/home',
        controller: 'GameCtrl'
      });

      
    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
