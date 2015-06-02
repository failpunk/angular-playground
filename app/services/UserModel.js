'use strict';

module.exports = UserModel;

UserModel.$inject = ['$http', '$q', '$log'];

/* @ngInject */
function UserModel($http, $q, $log) {

  var userData;

  var service = {
    fetch: fetch,
    test: test
  };

  return service;

  ////////////////

  function test() {
    return true;
  }

  function fetch(id) {
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

}