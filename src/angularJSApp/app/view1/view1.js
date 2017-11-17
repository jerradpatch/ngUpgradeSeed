'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  var routes = $routeProvider.routes;
}])

.controller('View1Ctrl', [function() {
  var testVar = "this is a test string";
}]);
