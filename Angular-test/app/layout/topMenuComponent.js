(function () {
    function menuCtrl() {
        this.userData = {};
        
        

    };

    menuCtrl.$inject = [];

    angular.module('layoutComp', [])
        .component('topMenu', {
            templateUrl: '/app/layout/views/topMenu.html',
            controller: menuCtrl
        });
})();