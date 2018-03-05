var hostsApp = angular.module('hosts', []);

hostsApp.controller('hostsController', function ($scope) {
    
	var mymap = L.map('map', {
	    center: [51.505, -0.09],
	    zoom: 13
	});
    
    L.tileLayer('/images/israelMap.jpg', {noWrap: false}).addTo(mymap);

});