angular.module('app', ['ngMessages', 'ui.router', 'infinite-scroll', 'homeComp', 'homeCtrl', 'feedComp', 'feedService', 'test.home', 'test.feed', 'layoutComp'])
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider', function ($locationProvider, $urlRouterProvider, $httpProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $urlRouterProvider.otherwise("/notfound");
}]);
   