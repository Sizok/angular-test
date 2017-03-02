(function () {
    function profileService($http, localStorageService) {
        var factory = {};



        return factory;
    }

    profileService.$inject = ['$http', 'localStorageService'];
    angular.module('profileModule', []).factory('profileService', profileService);
})();