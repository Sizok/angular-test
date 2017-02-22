(function () {
    angular.module('test.feed', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('feed', {
                url: '/feed',
                template: '<feed-page data = $resolve.data></feed-page>',
                data: {
                    pageTitle: 'Test'
                },
                resolve: {
                    data: ['getPostService', function (getPostService) {
                        return getPostService.getPost(0);
                    }]
                }
            });
        }])

})();