console.log("1 - app");

var app = angular.module('workflow', ['ngSanitize', 'ngRoute']);

// app.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider
//         .when('/list1', {
//             templateUrl: 'partials/list1.html',
//             controller: 'mainController'
//         })
//         .when('/languages', {
//             templateUrl: 'partials/languages.html',
//             controller: 'languageController'
//         })
//         .otherwise({
//             redirectTo: '/list'
//         });
//   }]);



app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/list1', {
        templateUrl: 'partials/list1.html',
        controller: 'mainController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/languages', {
        templateUrl: 'partials/languages.html',
        controller: 'languagesController'
    });

    $routeProvider.otherwise({
        redirectTo: '/list'
    });

}]);
