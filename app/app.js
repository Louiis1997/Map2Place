'use strict';

angular.module('privacyApp', [])
    .controller('PrivacyController', function($scope) {
      // Récupérer la date actuelle
      var currentDate = new Date();
      $scope.currentDate = currentDate.toLocaleDateString();
    });