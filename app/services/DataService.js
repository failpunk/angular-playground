'use strict';

module.exports = DataService;

DataService.$inject = ['$http', '$q', '$log', 'smAuth'];

/* @ngInject */
function DataService($http, $q, $log, smAuth) {

  var userData;

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
    if(!smAuth.signedIn()) {
      return $q.reject('User not signed in');
    }

    if (userData) {
      $log.info('returning cached user');
      return $q.when(userData);   // return cached data
    } else {
      $log.info('Fetch user via ajax');
      return $http.get(
        '/v2/user/profile/' + smAuth.getAuthData().user_id
      )
        .then(userSuccess, promiseError);
    }

    function userSuccess(response) {
      return userData = response.data.user;
    }
  }

  /**
   * Update user's password
   * @param oldPass
   * @param newPass
   * @returns {*}
   */
  function updatePassword(oldPass, newPass) {
    return $http.post(
      '/v2/user/change-password',
      {
        old_password: oldPass,
        new_password: newPass
      }
    )
      .then(promiseSuccess, promiseError);
  }

  /**
   * Update user's email
   * @param newEmail
   * @returns {*}
   */
  function updateEmail(newEmail) {
    return $http.post(
      '/v2/user/change-email',
      {
        client_id: $.stmode.tplVars.client_id,
        new_email: newEmail
      }
    )
      .then(promiseSuccess, promiseError);
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
      .then(authSuccess, authError);

    // extract, save, and return auth data
    function authSuccess(response) {
      smAuth.setAuthData(response.data);
      return response.data;
    }

    function authError(response) {
      return $q.reject(response.data.errors);
    }
  }

  // Pass back just the errors
  function promiseError(response) {
    debugger;
    return $q.reject(response.data.error);
  }

  // Pass back just the data
  function promiseSuccess(response) {
    debugger;
    return $q.when(response.data.data);
  }

}