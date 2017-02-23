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
            'Authorization': 'Bearer k7y1XzCxzxStaM2KsdWkKK74d8rnu4RqXbEfeDCT_3ST7pGmUiMn4JXipXPoewl7bca8XOI37LwdHFPhdUdhMPfHcXsxmkOE6BSeuivIbTTloRyUWepnvavrFeISAFwrvqKTgPqjGNA-sLoRnueuTXjTIGRE_4TgRchNeWpM3frQe_moBgEYkZz5Cbh951A8I-BAaUv7sWIwW6uNO3VjDAscS4tiCjHdga_mA1GtxQtfD3UkmRrsyBGnTFWCSz2NIlsjGnED0gFAB3eWiFJ6bvvjD_kIT3iZiXHy0f-6zySdAXejSEoS9weNsrqljRUXpGacKeqPLEf2U2P3H0o8TXsbIR0b3qPPxPMaVSC31rhocF3hrnyYYfZN0_80nJPQGvQHAZQmoD-jKZi7eALBO4MWl_Hdnij2ES5fDyfRimdMpbM8MGz1GOyNm-O1giYS7yKhDvtUbW8DeVuM6TURtdP4CzqDPdRu7wF7BXXY_o9tmRYvVtzEszavKmvBaOjP'
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