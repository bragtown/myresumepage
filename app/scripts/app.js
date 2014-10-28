'use strict';

angular.module('myresumepageApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
        // resolve: {
        //   'posts': function(Blogservice) {
        //   return Blogservice.getPost();
        //   }
        // }
      }).when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      }).when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
