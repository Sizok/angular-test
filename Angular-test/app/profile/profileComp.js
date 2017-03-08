(function () {
    function profileCtrl(profileService, localStorageService) {
        var ctrl = this;
        ctrl.url = {
            imgUrl: 'http://startupers.blob.core.windows.net'
        }
        ctrl.currentUser = {};
        ctrl.profileService = profileService;
        ctrl.currentUser = localStorageService.get('currentUser');
        debugger;
        ctrl.currentUser = ctrl.currentUser.data;
    };

    profileCtrl.$inject = ['profileService', 'localStorageService'];

    angular.module('profileModuleComp', [])
        .component('profilePage', {
            templateUrl: '/app/profile/views/profile.html',
            controller: profileCtrl
        });
})();