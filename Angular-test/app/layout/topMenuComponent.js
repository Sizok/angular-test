(function () {
    function menuCtrl(topMenuService) {
        ctrl = this;

        ctrl.loginService = topMenuService;

        ctrl.userData = {
            grant_type: 'password'
        };

        ctrl.loginNewUser = function () {
            debugger;
            ctrl.loginService.loginUser(ctrl.userData);
        }
        
        

    };

    menuCtrl.$inject = ['topMenuService', '$http'];

    angular.module('layoutComp', [])
        .component('topMenu', {
            templateUrl: '/app/layout/views/topMenu.html',
            controller: menuCtrl
        });
})();