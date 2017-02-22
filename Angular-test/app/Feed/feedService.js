(function () {
  function getPostService($http) {
      var factory = {};

      var params = {};

     


      factory.getPost = function (skip) {
          params.skip = skip?skip:0;
          return $http.get('https://startupers.us/api/v1/feed',
      {
        params: params,
        headers: {
            'Authorization': 'Bearer uYhIAYhq3sa7D6-uKtjg-vHEuiWxvsY27wqjPHqgLRZoYURST8WMfd4uvw6royf2HgfcbZPUBe-uUIlYEfT693d6F3ylWbhpJDk6aIp4BB8wajRzZXfjQLjzbvqxgVC4cd-EzhynFtszTsBVzVPysK6zgFbccrnPJlRj-6FYOJWgIwD6IyqQFHMtHvMeMZyzQIliB0ugnDekJRKSz6Ihi8pwpzYLZgHqwrUwJqeCjfTCyTLTrRCvc_vpJMHkKig5dlrjJdxHEEllFEcHEXAJ7eBkEsssK-q7S83oSXo0n20KIqrptCErjb40q-PSWXIzXEqPaYTRCmPKTcjBUgZQaoiA4gAUNKLm2m0ccWaTIC2mrLbYAep3-qE6WAFwaqaJt45fEYoL-sCKpJlI4Y8R6h-pxKpV7h90DSaje2wAm2qRL_4ufotAvCfk4YdXnNrUGtu88CT2rfyd0YhXxHe_nEg3JnxW3ycT0HtXf3TsMgOgnD7xs3BWddKCwMdmcWhO'
        }
      }).then(function (data) {
          return data;
      })
    }
    return factory;
  }
   
  getPostService.$inject = ['$http'];
  angular.module('feedService',[]).factory('getPostService', getPostService);
})();