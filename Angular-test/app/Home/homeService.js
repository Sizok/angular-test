angular.module('homeCtrl').factory('loginService', function () {
  var login = {};
  login.tableInfo = [{ login: 'Sizok', password: 'aasdasd' }];

  login.addUser = function (loginData) {
    login.tableInfo.push({ login: loginData.login, password: loginData.password });
  }
  return login;
});