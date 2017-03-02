(function () {
    function postModalCtrl($http, postModalService) {
        var ctrl = this;

        var postModalService = postModalService;

        ctrl.currentPostData = {};
        ctrl.$onInit = function () {
            ctrl.currentPostData = ctrl.resolve.post;
        };
        
        
        ctrl.cancel = function () {
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