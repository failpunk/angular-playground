'use strict';

module.exports = DataService;

DataService.$inject = ['$http', '$q', '$log'];

/* @ngInject */
function DataService($http, $q, $log) {

  var userData;

  var service = {
    getUser: getUser,
    saveUser: saveUser
  };

  return service;

  ////////////////

  function getUser(id) {
    if(userData) {
      $log.info('returning cached user');
      return $q.when(userData);   // return cached data
    } else {
      $log.info('Fetch user via ajax');
      return $http.get('http://jsonplaceholder.typicode.com/users/' + id)
        .then(function(response) {
          return userData = response.data;
        });
    }
  }

  function saveUser(id, data) {
    return $http.put(
      'http://jsonplaceholder.typicode.com/users/' + id,
      data
    );
  }

}