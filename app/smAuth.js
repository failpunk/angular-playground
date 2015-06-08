'use strict';

module.exports = smAuth;

smAuth.$inject = ['_', 'localStorageService'];

function smAuth(_, localStorageService) {

  console.log('localStorageService',localStorageService);

  // Public Api
  return {
    signedIn: signedIn,
    setAuthData: setAuthData,
    getAuthData: getAuthData,
    getTokenHeader: getTokenHeader
  };


  /////////////


  function signedIn() {
    return !_.isEmpty(
      getAuthData()
    );
  }

  function setAuthData(data) {
    localStorageService.set('authData', data);
  }

  function getAuthData() {
    return localStorageService.get('authData');
  }

  function getTokenHeader() {
    return 'Bearer ' + getAuthData().access_token;
  }
}