

var app = angular.module('workflow', ['ngSanitize', 'ngRoute']);

//console.log("1 - app");

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/page1', {
        templateUrl: 'templates/page1.html',
        controller: 'page1Controller'
    });

    $routeProvider.when('/page2', {
        templateUrl: 'templates/page2.html',
        controller: 'page2Controller'
    });

    $routeProvider.when('/page3', {
        templateUrl: 'templates/page3.html',
        controller: 'page3Controller'
    });

    $routeProvider.otherwise({
        redirectTo: '/page1'
    });

}]);
