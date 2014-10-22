'use strict';
var NewAlertCtrl = function ($scope, $modalInstance,$rootScope) {

  
  $scope.save = function () {
    var newalert={
      "module":module.value,
    };
    $modalInstance.close(newalert);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
  $scope.open = function($event,comp) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[comp] = true;
  };
  $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
};

angular.module('monitoringUiApp')
  .controller('AlertsCtrl', function ($scope, $http,$modal) {
    $http.get('/api/alertdef').success(function(alerts) {
      $scope.alertdefs = alerts;
    });
    $scope.openNewAlertModal=function() {
     var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller:NewAlertCtrl
        });
     modalInstance.result.then(function(newalert){
      $http({
        method: 'POST',
        url: '/service/analysis/analysisJob',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: transformRequest,
        data: newanalysis
      }).success(function(data) {
      }).error(function(data){
      });
     });
    
  };
  });
