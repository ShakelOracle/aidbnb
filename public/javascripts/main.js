var hostsApp = angular.module('hosts', ["ngRoute"]);

hostsApp.config(function($routeProvider) {
    $routeProvider
    .when("/addHost", {
        templateUrl : "/views/addHost.html"
    })
    .when("/addBenefit", {
        templateUrl : "/views/addBenefit.html"
    })
    .when("/login", {
        templateUrl : "/views/login.html"
    })
    .when("/about", {
        templateUrl : "/views/about.html"
    })
    .otherwise("/about");
});