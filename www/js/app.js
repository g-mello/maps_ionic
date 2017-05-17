// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });

  $urlRouterProvider.otherwise("/");

})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {

 var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

  var pontoUsuario = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

// pub ze brasil
    var ponto2 = new google.maps.LatLng(-20.547639, -47.400569);
// Mercury pub
    var ponto3 = new google.maps.LatLng(-20.528455, -47.386165);
//picanha
    var ponto4 = new google.maps.LatLng(-20.547974, -47.398378);
//bistro retro
    var ponto5 = new google.maps.LatLng(-20.533040, -47.398920);

//Miguelzinho snooker bar
    var ponto6 = new google.maps.LatLng(-20.545028, -47.397639);
//Projeto Lumiar
    var ponto7 = new google.maps.LatLng(-20.571236, -47.402696);

// Barraco Baco
    var ponto8 = new google.maps.LatLng(-20.569915, -47.404806);

// Nossa Noite
    var ponto9 = new google.maps.LatLng(-20.536607, -47.391705);
// Bar Careta
    var ponto10 = new google.maps.LatLng(-20.534069, -47.394646);
//Barba Negra
    var ponto11 = new google.maps.LatLng(-20.534900, -47.408549);
// Sr Lupulo
    var ponto12 = new google.maps.LatLng(-20.537109, -47.388558);

    var mapOptions = {
      center: pontoUsuario,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

 //Wait until the map is loaded


google.maps.event.addListenerOnce($scope.map, 'idle', function(){

 var image = 'https://scontent.frao1-1.fna.fbcdn.net/v/t34.0-12/18601423_1342085115879471_1359342496_n.png?oh=1a6c766da8897c7bdec856de0cea0100&oe=591F169F';

 var marca1 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: pontoUsuario,
      label: "Estou aqui",
      icon: {
		      path: SQUARE_PIN,
		        fillColor: '#00CCBB',
		          fillOpacity: 1,
		            strokeColor: '',
		              strokeWeight: 0
	               },
	     map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
  });


  var marca2 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto2,
      label: "Pub Zé Brasil",
      icon: image
  });

   var marca3 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto3,
      label: "Mercury Pub",
      icon:image
  });

  var marca4 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto4,
      label: "Picanha na Tábua",
      icon:image
  });

  var marca5 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: ponto5,
        label: "Bistro Retrô",
        icon:image
    });

    var marca6 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto6,
          label: "Miguelzinho Sinuca",
          icon:image
      });
    var marca7 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto7,
          label: "Projeto Lumiar",
          icon:image
      });

    var marca8 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto8,
          label: "Barraco Baco",
          icon:image
      });

    var marca9 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto9,
          label: "Nossa Noite Bar",
          icon:image
      });
    var marca10 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto10,
          label: "Bar Careta",
          icon:image
      });
    var marca11 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto11,
          label: "Barba Negra",
          icon:image
      });
    var marca12 = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: ponto12,
          label: "Sr.Lupulo",
          icon:image
      });
});


  }, function(error){
    console.log("Could not get location");
  });


});
