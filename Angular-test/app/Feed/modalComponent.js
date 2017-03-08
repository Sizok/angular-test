(function () {
    function postModalCtrl($http, postModalService) {
        var ctrl = this;

        var postModalService = postModalService;
        ctrl.url = {
            imgUrl: 'http://startupers.blob.core.windows.net'
        };
        ctrl.currentPostData = {};
        ctrl.$onInit = function () {
            ctrl.currentPostData = ctrl.resolve.post;
        };
        
        
        ctrl.close = function () {
            ctrl.dismiss({ $value: 'cancel' });
        };
    }

    postModalCtrl.$inject = ['$http', 'postModalService'];

    angular.module('app')
        .component('postModalPage', {
            templateUrl: '/app/Feed/views/postModal.html',
            controller: postModalCtrl,
            bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
            }
        });
})();