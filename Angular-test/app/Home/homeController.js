angular.module('homeCtrl', [])
.controller('sendCtrl', ['$scope', 'loginService', function ($scope, loginService) {
  $scope.service = loginService;

  $scope.loginData = {};


  $scope.addUserInfo = function (valid) {
    if (valid) {
      loginService.addUser($scope.loginData);
    }
  }
}]);