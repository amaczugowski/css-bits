'use strict';

angular.module('myApp', [])

.controller('MyCtrl', function($scope, $timeout) {
  $scope.buttonClicked = false;
  $scope.setVisible = false;
  $scope.setBackground = false;

  $scope.clickButton = function() {
    $scope.buttonClicked = true;
    // $scope.setBackground = true;
    $timeout(function () {
      $scope.buttonClicked = false;
    }, 300);
  }

  $scope.alternate = function() {
    $timeout(function () {
      $scope.setVisible = !$scope.setVisible;
      $scope.alternate();
    }, 5000);
  }

  $scope.alternate();
});
