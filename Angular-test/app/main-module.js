angular.module('app', ['ngMessages', 'ui.router', 'infinite-scroll', 'LocalStorageModule', 'homeComp', 'homeCtrl', 'feedComp', 'feedService', 'test.home', 'test.feed', 'layoutComp', 'menuService'])
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider', function ($locationProvider, $urlRouterProvider, $httpProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $urlRouterProvider.otherwise("/notfound");
    }])
    .run(['$http', 'localStorageService', 'topMenuService', '$rootScope', function ($http, localStorageService, topMenuService, $rootScope) {

        var userInfo = localStorageService.get('userData');
        console.log(userInfo);
        var localUserInfo = localStorageService.get('infoCurrentUser');
        console.log(localUserInfo);
        $rootScope.isAut = false;
    }])
   