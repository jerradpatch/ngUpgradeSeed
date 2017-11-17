

var BASEPATH = 'angularJSApp/app/';

angular.module('rewriteTemplateUrlsHack', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    var savedWhen = $routeProvider.when;

    $routeProvider.when = rewriteTemplateUrls;
    /*
     a shim used to allow all angularJS html templates to be fetched from a non root folder
     */
    function rewriteTemplateUrls (path, route) {
      if(route.controller && !route.template && route.templateUrl)
        route.templateUrl = BASEPATH + route.templateUrl;

      savedWhen.call($routeProvider, path, route);
    };
  }]);
