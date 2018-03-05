var hostsApp = angular.module('hosts', []);

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
            
            var map = new google.maps.Map(document.getElementById('map2'), {
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