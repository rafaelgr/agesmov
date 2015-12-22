angular.module('agesmov.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})




.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
    var marcadores = []
    var latLng = new google.maps.LatLng(0, 0);

    var options = {
        timeout: 10000,
        enableHighAccuracy: true
    };

    var bounds = new google.maps.LatLngBounds();

    $scope.map = null;

    $scope.geoloc = function() {
        $cordovaGeolocation.getCurrentPosition(options).then(function(position) {

            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

            google.maps.event.addListenerOnce($scope.map, 'idle', function() {

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });

                //bounds.extend(marker.position);
                marcadores.push(marker);

                var infoWindow = new google.maps.InfoWindow({
                    content: "Aquí estoy ahora mismo!"
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.open($scope.map, marker);
                });

            });

        }, function(error) {
            console.log("Could not get location");
        });
    };

    $scope.myPos = function() {
        $cordovaGeolocation.getCurrentPosition(options).then(function(position) {

            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var marker = new google.maps.Marker({
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                position: latLng
            });

            marcadores.push(marker);

            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
            var infoWindow = new google.maps.InfoWindow({
                content: "Aquí estoy ahora mismo!"
            });

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open($scope.map, marker);
            });

            for (var i = 0; i < marcadores.length; i++){
                bounds.extend(marcadores[i]);
            }

            $scope.map.setCenter(bounds.getCenter());
            $scope.map.fitBounds(bounds); 

            // var mapOptions = {
            //     center: latLng,
            //     zoom: 15,
            //     mapTypeId: google.maps.MapTypeId.ROADMAP
            // };

            // $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

            // google.maps.event.addListenerOnce($scope.map, 'idle', function() {



            // });

        }, function(error) {
            console.log("Could not get location");
        });
    };

    $scope.cambia = function() {
        var latLng = new google.maps.LatLng(0, 0);

        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var address = "Avenida General Aviles N.10 Valencia";
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': address
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $scope.map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    $scope.returnToContacto = function() {
        $state.go('cli.contacto');
    };

    // event handlers
    $scope.$on('$ionicView.enter', function(e) {
        $scope.cambia();
    });


})
