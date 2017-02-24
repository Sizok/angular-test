(function () {
    'use strict';

    function topMenuService($rootScope, $http, localStorageService) {
        var factory = {};

        var loginData = {};

        //factory.loginUser = function (user) {
        //    $http.post('https://startupers.us/oauth/token', $.param(user))
        //    .then(function (user) {
        //        factory.userNewData = user;

        //        console.log(factory.userNewData);
        //        var currentUser = {};
                
                    
                
        //        currentUser.token = factory.userNewData.data.token_type + ' ' + factory.userNewData.data.access_token;

        //        localStorageService.set('currentUser', currentUser);

        //        $http.get('https://startupers.us/api/v1/user',
        //            {
        //                headers: {
        //                    'Authorization': currentUser.token
        //                }
        //            })
        //        .then(function (user) {
        //            var infoCurrentUser = user;
        //            localStorageService.set('infoCurrentUser', infoCurrentUser)
        //            factory.loginData = user;
        //        });
        //    })

        //}


        
        
        factory.loginUser = function (user) {
            var currentUserToken = localStorageService.get('userData');

            debugger;
            if (currentUserToken == null || currentUserToken['.expires'] < new Date()) {

                debugger;
                $http.post('https://startupers.us/oauth/token', $.param(user)).then(function (user) {

                    factory.userData = user;
                    localStorageService.set('userData', factory.userData)

                    console.log(factory.userData)

                    var currentUser = {};

                    $rootScope.isAut = true;

                    currentUser.token = factory.userData.data.token_type + ' ' + factory.userData.data.access_token;

                    $http.get('https://startupers.us/api/v1/user',
                        {
                            headers: {
                                'Authorization': currentUser.token
                            }
                        })
                    .then(function (user) {
                        var infoCurrentUser = user;
                        localStorageService.set('infoCurrentUser', infoCurrentUser)
                        factory.userDataInfo = user;
                        console.log(factory.userDataInfo)
                    });
                });
            }
            else {
                var currentUser = {};
                debugger;

                currentUser.token = currentUserToken.data.token_type + ' ' + currentUserToken.data.access_token;
                console.log(currentUser.token);
                $rootScope.isAut = true;

                $http.get('https://startupers.us/api/v1/user',
                       {
                           headers: {
                               'Authorization': currentUser.token
                           }
                       })
                   .then(function (user) {
                       debugger;
                       var infoCurrentUser = user;
                       localStorageService.set('infoCurrentUser', infoCurrentUser)
                       factory.userDataInfo = user;
                       console.log(factory.userDataInfo)
                   });
            }
        }

       
        return factory;
    }

    topMenuService.$inject = ['$rootScope', '$http', 'localStorageService'];
    angular.module('menuService', []).factory('topMenuService', topMenuService);
})();