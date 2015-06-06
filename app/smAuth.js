'use strict';

module.exports = smAuth;

smAuth.$inject = ['_'];

function smAuth(_) {

  var authData = {};

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
    authData = _.clone(data, true);
  }

  function getAuthData() {
    return authData;
  }

  function getTokenHeader() {
    return 'Bearer ' + authData.access_token;
  }
}