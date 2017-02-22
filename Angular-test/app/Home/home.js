(function () {
    angular.module('test.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page></home-page>',
                data: {
                    pageTitle: 'Test'
                }
            });
        }])

})();