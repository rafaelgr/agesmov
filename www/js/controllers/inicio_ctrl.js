var app = angular.module('agesmov.controllers', []);

app.controller('InicioCtrl', function($scope) {
  $scope.logged = false;

  $scope.login = function(){
    $scope.logged = true;
  }

  $scope.logout = function(){
    $scope.logged = false;
  }
})

app.controller('CliDatosCtrl', function($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
})