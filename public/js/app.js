/**
 * Created by mamoruohara on 12/12/16.
 */
var app = angular.module('Arahoomam',['ngRoute', 'ArahoomamControllers']);

app.config(['$routeProvider', function ($routeProvider) {

    // Setting up routes for various views
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsController'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]
);
