var hostsApp = angular.module('myApp', ["ngRoute"]);

hostsApp.controller('hostsController', function ($scope) {

   $scope.Houses = [{ "address":"avinadav yeroham 4 gedera"}, { "address":"magen 4 meitar"}];
	
    $scope.initMap = function () {
        
        for (var i = 0; i < $scope.Houses.length; i++) {
        	$scope.InsertAddress($scope.Houses[i].address);
        }
    }
    
    $scope.InsertAddress = function (address) {
    	var uluru =[];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            "address": address
        }, function (results) {
            uluru = results[0].geometry.location;
            
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: "/images/noBackground.png"
        });
        });        
    }
});

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
    .when("/benefits", {
        templateUrl : "/views/benefits.html"
    })
    .when("/hosts", {
        templateUrl : "/views/hosts.html"
    })
    .otherwise({
        redirectTo: "/about"
    });
});

hostsApp.controller('benefitsController', function ($scope) {

     $scope.Houses = [{ "address":"avinadav yeroham 4 gedera"}, { "address":"magen 4 meitar"}];
	
    $scope.initMap = function () {
        
        for (var i = 0; i < $scope.Houses.length; i++) {
        	$scope.InsertAddress($scope.Houses[i].address);
        }
    }
    
    $scope.InsertAddress = function (address) {
    	var uluru =[];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            "address": address
        }, function (results) {
            uluru = results[0].geometry.location;
            
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: "/images/noBackground.png"
        });
        });        
    }
});