angular.module('homeCtrl').factory('loginService', function () {
  var login = {};
  login.tableInfo = [{ login: 'ogamilait@gmail.com', password: 'aasdasd' }];

  login.addUser = function (loginData) {
    login.tableInfo.push({ login: loginData.login, password: loginData.password });
  }
  return login;
});