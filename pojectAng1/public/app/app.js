var myApp = angular.module('fmyApp', [
    'ui.router'
]);

myApp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});