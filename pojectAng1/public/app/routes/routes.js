var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            abstract: true,
            url: '',
        })
        .state('home.main', {
            url: '/home',
            templateUrl: '/partials/home1.html'
        })
        .state('home.login', {
            url: '/login',
            templateUrl: '/partials/login.html'
        })
        .state('home.registration', {
            url: '/registration',
            templateUrl: '/partials/registration.html'
        })

    $locationProvider.html5Mode(true);

}]);