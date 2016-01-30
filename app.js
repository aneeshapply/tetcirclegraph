var mainApp = angular.module('mainApp', ['ngRoute']);


mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'list.html',
      //controller: 'CountryCtrl'
    })
    .when('/graph', {
      templateUrl: 'graph.html'
    });
}]);
