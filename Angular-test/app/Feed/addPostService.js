(function () {
    function addPostService($http) {
        var factory = {};
        var params = {};
        factory.addNewPost = function (params) {
            return $http.post('http://startupers.azurewebsites.net/api/v1/post', {
                param: {
                    image: params.image,
                    text: params.text,
                    title: params.title,
                    link: params.link,
                    nickname: params.nickname,
                    hashtags: params.hashtags
                }
        }).then(function (result) {
            debugger;
            return result;
        })
        }
        return factory;
    }

    addPostService.$inject = ['$http'];
    angular.module('addPost', []).factory('addPostService', addPostService);
})();