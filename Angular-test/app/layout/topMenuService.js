(function () {
    'use strict';

    function topMenuService($http) {
        var factory = {};

        var loginData = {};

        factory.loginUser = function (user) {
            $http.post('https://startupers.us/oauth/token', $.param(user))
            .then(function (user) {
                factory.userNewData = user;
                console.log(factory.userNewData);
            })

        }

        


       
        return factory;
    }

    topMenuService.$inject = ['$http'];
    angular.module('menuService', []).factory('topMenuService', topMenuService);
})();