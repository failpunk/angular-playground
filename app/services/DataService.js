'use strict';

module.exports = DataService;

DataService.$inject = ['$http', '$q', '$log'];

/* @ngInject */
function DataService($http, $q, $log) {

  var userData;
  var authData;

  var service = {
    getUser: getUser,
    authenticate: authenticate,
    updatePassword: updatePassword,
    updateEmail: updateEmail
  };

  return service;

  ////////////////

  /**
   * Fetch user profile data
   * @returns {*}
   */
  function getUser() {
    if(!authData) {
      return $q.reject('User not signed in');
    }

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

  function updatePassword(oldPass, newPass) {
    return $http.post(
      '/v2/user/change-password',
      {
        client_id: $.stmode.tplVars.client_id,
        old_password: oldPass,
        new_password: newPass
      },
      {
        headers: {
          Token: 'Bearer ' + authData.access_token
        }
      }
    )
      .then(unwrapOldResponse)
      .then(function(data) {
        return data;
      });
  }

  function updateEmail(newEmail) {
    return $http.post(
      '/v2/user/change-email',
      {
        client_id: $.stmode.tplVars.client_id,
        new_email: newEmail
      },
      {
        headers: {
          Token: 'Bearer ' + authData.access_token
        }
      }
    )
      .then(unwrapOldResponse)
      .then(function(data) {
        return data;
      });
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