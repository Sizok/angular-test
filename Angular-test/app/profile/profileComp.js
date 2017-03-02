(function () {
    function profileCtrl(profileService, localStorageService) {
        var ctrl = this;
        ctrl.url = {
            imgUrl: 'http://startupers.blob.core.windows.net'
        }
        ctrl.currentUser = {};
        ctrl.profileService = profileService;
        debugger;
        ctrl.currentUser = localStorageService.get('currentUser');
        ctrl.currentUser = ctrl.currentUser.data;
    };

    profileCtrl.$inject = ['profileService', 'localStorageService'];

    angular.module('profileModuleComp', [])
        .component('profilePage', {
            templateUrl: '/app/profile/views/profile.html',
            controller: profileCtrl
        });
})();