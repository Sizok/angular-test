(function () {
    function menuCtrl(topMenuService, $http, $rootScope, localStorageService, $uibModal) {
        var ctrl = this;

        ctrl.loginService = topMenuService;
        ctrl.currentUser = localStorageService.get('currentUser');
        ctrl.url = {
            imgUrl: 'http://startupers.blob.core.windows.net'
        };
        ctrl.userData = {
            grant_type: 'password'
        };

        ctrl.loginNewUser = function () {
            ctrl.loginService.loginUser(ctrl.userData);
        }
        
        ctrl.rootScope = $rootScope;

        ctrl.logOut = function () {
            ctrl.loginService.logOut();
        }

        ctrl.openComponentModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'addPostComp',
            });
        };
    };

    menuCtrl.$inject = ['topMenuService', '$http', '$rootScope', 'localStorageService', '$uibModal'];

    angular.module('layoutComp', [])
        .component('topMenu', {
            templateUrl: '/app/layout/views/topMenu.html',
            controller: menuCtrl
        });
})();