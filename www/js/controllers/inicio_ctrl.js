angular.module('agesmov.controllers', [])

.controller('InicioCtrl', function($scope) {
  $scope.logged = false;

  $scope.login = function(){
    $scope.logged = true;
  }

  $scope.logout = function(){
    $scope.logged = false;
  }
})