(function () {
    function feedCtrl($http, getPostService) {
        ctrl = this;

        ctrl.data = [];

        ctrl.postService = getPostService;
        ctrl.progress = false;

        ctrl.getNewPosts = function () {
            ctrl.progress = true;
            getPostService.getPost(ctrl.data.length).then(function (result) {
                
                ctrl.progress = false;
                ctrl.data.push.apply(ctrl.data, result.data);
            });
        }
    };

    feedCtrl.$inject = ['$http', 'getPostService'];

    angular.module('feedComp', [])
        .component('feedPage', {
            templateUrl: '/app/Feed/views/feedPage.html',
            })
        .component('feedPost', {
            templateUrl: '/app/Feed/views/feedPost.html',
            controller: feedCtrl
            //bindings: {
            //    data: "<"
            //}
        })
        .component('feedTopMenu', {
            templateUrl: '/app/Feed/views/feedTopMenu.html',
        })
        .component('feedMenu', {
            templateUrl: '/app/Feed/views/feedMenu.html',
        });
})();