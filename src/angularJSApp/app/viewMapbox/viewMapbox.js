'use strict';

angular.module('myApp.MapBox1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/MapBox1', {
    templateUrl: 'viewMapbox/viewMapbox.html',
    controller: 'MapBox1Cont'
  });
}])

.controller('MapBox1Cont', [function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiamVycmFkcGF0Y2giLCJhIjoiY2phOHJyaWV5MGFieDJxcTltNjhnM2RlYiJ9.dT65Nt56c2ZLXai4ReSLxg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
  });

}]);
