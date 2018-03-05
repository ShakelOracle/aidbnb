var hostsApp = angular.module('hosts', []);

hostsApp.controller('hostsController', function ($scope) {

    $scope.initMap = function () {
        var uluru =[];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            "address": 'Ben Gurion University of the Negev'
        }, function (results) {
            uluru = results[0].geometry.location;
            
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
        });
        
        
    }
});