(function () {
    function addPostCtrl(addPostService) {
        var ctrl = this;
        ctrl.addPostService = addPostService;
        ctrl.newPostData = {};

        ctrl.addNewPost = function (newPostData) {
            ctrl.addPostService.addNewPost(newPostData);
            ctrl.dismiss({ $value: 'cancel' });
        }
                
        ctrl.cancel = function () {
            ctrl.dismiss({ $value: 'cancel' });
        };
        
    };

    addPostCtrl.$inject = ['addPostService'];

    angular.module('app')
        .component('addPostComp', {
            templateUrl: '/app/Feed/views/addNewPostModal.html',
            bindings: {
                posts: '<',
                close: '&',
                dismiss: '&'
            },
            controller: addPostCtrl
        });
})();