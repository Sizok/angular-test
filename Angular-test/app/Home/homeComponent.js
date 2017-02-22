(function () {
  function Ctrl(loginService) {
    this.service = loginService;

    this.loginData = {};


    this.addUserInfo = function (valid) {
      if (valid) {
        loginService.addUser(this.loginData);
      }
    }
  };

  Ctrl.$inject = ['loginService'];

    angular.module('homeComp', [])
    .component('homePage', {
        templateUrl: '/app/Home/views/homePage.html',
        controller: Ctrl
    })
    .component('homeInput', {
        templateUrl: '/app/Home/views/homeInput.html',
        controller: Ctrl
    })
    .component('homeTable', {
        templateUrl: '/app/Home/views/homeTable.html',
        controller: Ctrl
    })

})();