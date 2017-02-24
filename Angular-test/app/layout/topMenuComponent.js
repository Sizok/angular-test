(function () {
    function menuCtrl(topMenuService, $http, $rootScope) {
        ctrl = this;

        ctrl.loginService = topMenuService;

        ctrl.userData = {
            grant_type: 'password'
        };

        ctrl.loginNewUser = function () {
            ctrl.loginService.loginUser(ctrl.userData);
        }
        
        ctrl.rootScope = $rootScope;

        //ctrl.userInfoData = topMenuService.userDataInfo;

        //if (ctrl.userInfoData != null)
        //    console.log(ctrl.userInfoData + 'ctrl data');

    };

    menuCtrl.$inject = ['topMenuService', '$http', '$rootScope'];

    angular.module('layoutComp', [])
        .component('topMenu', {
            templateUrl: '/app/layout/views/topMenu.html',
            controller: menuCtrl
        });
})();