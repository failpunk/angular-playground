'use strict';

module.exports = DataService;

DataService.$inject = ['$http', '$q', '$log', 'smUser'];

/* @ngInject */
function DataService($http, $q, $log, smUser) {

  var service = {
    getUser: getUser,
    getUserMessages: getUserMessages,
    //authenticate: authenticate,
    updatePassword: updatePassword,
    updateEmail: updateEmail,
    getMessage: getMessage,
    deleteMessage: deleteMessage,
    updateMessage: updateMessage
  };

  return service;

  ////////////////

  /**
   * Fetch user profile data
   * @returns {*}
   */
  function getUser() {
    var userData = smUser.getUserData();

    if (userData) {
      $log.info('returning cached user');
      return $q.when(userData);   // return cached data
    } else {
      $log.info('Fetch user via ajax');
      return $http.get(
        '/api/users/2'
      )
        .then(userSuccess, promiseError);
    }

    function userSuccess(response) {
      var userData = response.data.data;
      smUser.setUserData(userData);
      return userData;
    }
  }

  function getUserMessages(userId) {
    return $http.get(
        '/api/users/' + userId + '/messages'
    )
        .then(promiseSuccess, promiseError);
  }

  /**
   * Update user's password
   * @param oldPass
   * @param newPass
   * @returns {*}
   */
  function updatePassword(oldPass, newPass) {
    return $http.put(
      '/api/users/'  + smUser.user_id,
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
      '/api/users/change-email',
      {
        new_email: newEmail
      }
    )
      .then(promiseSuccess, promiseError);
  }

  function getMessage(messageId) {
    return $http.get(
        '/api/messages/' + messageId
    )
        .then(promiseSuccess, promiseError);
  }

  function deleteMessage(messageId) {
    return $http.delete(
        '/api/messages/' + messageId
    );
        //.then(promiseSuccess, promiseError);
  }

  function updateMessage(messageId, params) {
    return $http.put(
        '/api/messages/' + messageId,
        params
    )
        .then(promiseSuccess, promiseError);
  }

  /**
   * Authenticate with API
   * @param username
   * @param password
   * @returns {*}
   */
  //function authenticate(username, password) {
  //  return $http.post(
  //    '/api/users/signin?',
  //    {
  //      username: username,
  //      password: password
  //    }
  //  )
  //    .then(authSuccess, authError);
  //
  //  // extract, save, and return auth data
  //  function authSuccess(response) {
  //    debugger;
  //    smAuth.setAuthData(response.data);
  //    return response.data;
  //  }
  //
  //  function authError(response) {
  //    return $q.reject(response.data.errors);
  //  }
  //}

  // Pass back just the errors
  function promiseError(response) {
    return $q.reject(response.data.error);
  }

  // Pass back just the data
  function promiseSuccess(response) {
    return $q.when(response.data.data);
  }

}