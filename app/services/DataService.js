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

  function getUser() {
    if (userData) {
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
        .then(function (response) {
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

  /**
   * Authenticate with API
   * @param username
   * @param password
   * @returns {*}
   */
  function authenticate(username, password) {
    return $http.post(
      '/v2/user/signin?',
      {
        client_id: $.stmode.tplVars.client_id,
        username: username,
        password: password
      }
    )
      .then(unwrapOldResponse)
      .then(function(data) {
        return authData = data;
      });
  }

  /**
   * Unwrap non-restful endpoints and return proper promise object state
   * @param response
   * @returns {Promise}
   */
  function unwrapOldResponse(response) {
    var data = response.data;

    if (!data.success) {
      return $q.reject(data.errors);
    }

    return $q.when(data);
  }

}