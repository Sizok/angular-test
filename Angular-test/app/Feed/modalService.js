(function () {
    function postModalService($http) {
        var factory = {};

        return factory;
    }
    postModalService.$inject = ['$http'];
    angular.module('postModal', []).factory('postModalService', postModalService)
})();