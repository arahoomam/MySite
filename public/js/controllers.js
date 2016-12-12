/**
 * Created by mamoruohara on 12/12/16.
 */
var ArahoomamControllers = angular.module('ArahoomamControllers', []);

/**
 * ========================================
 * Controller for the home page
 * ========================================
 */
ArahoomamControllers.controller('HomeController', ['$scope',
    function($scope) {

        $scope.test = 'page-home';
    }]
);

/**
 * ========================================
 * Controller for the projects page
 * ========================================
 */
ArahoomamControllers.controller('ProjectsController', ['$scope',
    function($scope) {

        $scope.test = 'projects';
    }]
);