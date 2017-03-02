(function () {
    function feedCtrl($http, getPostService, $stateParams, $uibModal) {
        var ctrl = this;
        ctrl.data = [];

        ctrl.postService = getPostService;
        ctrl.progress = false;
        ctrl.getNewPosts = function () {
            ctrl.progress = true;
            getPostService.getPost(ctrl.data.length).then(function (result) {
                ctrl.progress = false;
                ctrl.posts = ctrl.posts.concat(result);
            });
        }
        ctrl.openComponentModal = function (post) {
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'postModalPage',
                resolve: {
                    post: function () {
                        return post;
                    }
                }
            });
        };
    };

    feedCtrl.$inject = ['$http', 'getPostService', '$stateParams', '$uibModal'];

    angular.module('feedComp', [])
        .component('feedPage', {
            templateUrl: '/app/Feed/views/feedPage.html',
            bindings: {
                posts: '<'
            },
            controller: feedCtrl
        });
})();