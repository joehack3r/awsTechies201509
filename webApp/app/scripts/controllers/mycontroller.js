'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MycontrollerCtrl', function ($scope, $http) {
    load();

    function load(){
      $http.get("https://apiGwPlaceholder.execute-api.us-east-1.amazonaws.com/dev/myapp")
        .success(function (response) {$scope.items = response.records;
          console.log(response.records);
      });
    }

    $scope.postForm = function(){
      $http({
        method  : 'POST',
        url     : 'https://apiGwPlaceholder.execute-api.us-east-1.amazonaws.com/dev/myapp',
        data    : $scope.formData,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      })
      .success(function(data) {
        console.log(data);
        load()
      });
    }
  });
