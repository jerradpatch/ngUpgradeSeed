

describe('view1.js', function() {
  var _view1;

  beforeEach(angular.mock.module('myApp.view1'));

  // Before each test load our api.users module
  beforeEach(angular.mock.module({
    '$routeProvider': {
      when: function(a,b) {},
      routes: ""
    }
  }));


  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  // beforeEach(inject(function(_view1) {
  //   view1 = _view1;
  // }));

  // A simple test to verify the Users factory exists
  it('a test to verify angularJS + Karma works by loading view1 controller, injecting its deps, and returning a value defined in its scope', function() {

    var _routeProvider;

    angular.mock.inject(function GetDependencies($routeProvider) {
      _routeProvider = $routeProvider;
    });

    var $scope = {};
    var controller = $controller('view1', { $scope: $scope });

    expect(_routeProvider).toBeDefined();
    expect(controller).toBeDefined();
    expect(controller.testVar).toBe("this is a test string");
  });
});
