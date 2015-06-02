'use strict';

module.exports = UserModel;

UserModel.$inject = ['$http', '$q'];

/* @ngInject */
function UserModel($http, $q) {

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
      console.log('returning cached user');
      return $q.when(userData);   // return cached data
    } else {
      console.log('Fetch user via ajax');
      return $http.get('http://jsonplaceholder.typicode.com/users/' + id)
        .then(function(response) {
          return userData = response.data;
        });
    }
  }

}