(function () {
    function getPostService($http, $stateParams) {
        var factory = {};
        var params = {};
        factory.getPost = function (stateParams, skip) {
            if (stateParams.hashtag)
                params.hashtag = stateParams.hashtag;
            if (stateParams.lastOrHot)
                params.lastOrHot = stateParams.lastOrHot;
            params.skip = skip ? skip : 0;

            return $http.get('https://startupers.us/api/v1/feed',
        {
            params: params
        }).then(function (result) {
            return result.data;
        })
        }
        return factory;
    }

    getPostService.$inject = ['$http', '$stateParams'];
    angular.module('feedService', []).factory('getPostService', getPostService);
})();