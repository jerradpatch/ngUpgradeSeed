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
    style: {
      "version": 8,
      "name": "Mapbox Streets",
      "sprite": "mapbox://sprites/mapbox/streets-v8",
      "sources": {
        "mapbox-streets": {
          "type": "vector",
          "url": "mapbox://mapbox.mapbox-streets-v6"
        }
      },
      "layers": [
        {
          "id": "water",
          "source": "mapbox-streets",
          "source-layer": "water",
          "type": "fill",
          "paint": {
            "fill-color": "#000000"
          }
        },
        {
          "id": "building",
          "source": "mapbox-streets",
          "source-layer": "building",
          "type": "fill-extrusion",
          "paint": {
            "fill-extrusion-color": "#FF0000"
          }
        },
        {
          "id": "landuse_overlay",
          "source": "mapbox-streets",
          "source-layer": "landuse_overlay",
          "type": "fill",
          "paint": {
            "fill-color": "#0000FF"
          }
        }
      ]
    }
  });

}]);
