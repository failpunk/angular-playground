'use strict';

angular
  .module('Models.User', [])
  .factory('UserModel', UserModel);

UserModel.$inject = ['$http'];

/* @ngInject */
function UserModel($http) {
  var service = {
    fetch: fetch
  };

  return service;

  ////////////////

  function fetch(id) {
    return $http.get('http://jsonplaceholder.typicode.com/users/' + id);
  }

}