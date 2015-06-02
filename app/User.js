'use strict';

var angular = require('angular');

angular
  .module('Models.User', [])
  .factory('UserModel', UserModel);

UserModel.$inject = ['$http', '$q'];

/* @ngInject */
function UserModel($http, $q) {

  var userData;

  var service = {
    fetch: fetch
  };

  return service;

  ////////////////

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