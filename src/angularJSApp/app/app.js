'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('myApp', [
  'ngRoute',
  'rewriteTemplateUrlsHack',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

module.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});

}]);
