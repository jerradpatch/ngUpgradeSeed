'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'view1'
  });
  var routes = $routeProvider.routes;
}])
.controller('view1', [function() {
  this.testVar = "this is a test string";
}]);
