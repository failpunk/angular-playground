'use strict';

module.exports = DataService;

DataService.$inject = ['$http', '$q', '$log'];

/* @ngInject */
function DataService($http, $q, $log) {

  var userData;
  var authData;

  var service = {
    getUser: getUser,
    saveUser: saveUser,
    authenticate: authenticate
  };

  return service;

  ////////////////

  function getUser(id) {
    if(userData) {
      $log.info('returning cached user');
      return $q.when(userData);   // return cached data
    } else {
      $log.info('Fetch user via ajax');
      return $http.get(
        '/v2/user/profile/' + authData.user_id,
        {
          headers: {
            Token: 'Bearer ' + authData.access_token
          }
        }
      )
        .then(function(response) {
          return userData = response.data.user;
        });
    }
  }

  function saveUser(id, data) {
    return $http.put(
      'https://jsonplaceholder.typicode.com/users/' + id,
      data,
      {
        headers: {
          'Token': authData.access_token
        }
      }
    );
  }

  function authenticate(username, password) {
    return $http.post(
      '/v2/user/signin?',
      {
        client_id: $.stmode.tplVars.client_id,
        username: username,
        password: password
      }
    ).then(function(data) {
        return authData = data.data;
      });
  }

}