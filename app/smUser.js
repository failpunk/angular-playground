'use strict';

module.exports = smUser;

smUser.$inject = ['localStorageService'];

function smUser(localStorageService) {

  // Public Api
  return {
    setUserData: setUserData,
    getUserData: getUserData
  };


  /////////////


  function setUserData(data) {
    localStorageService.set('smUser', data);
  }

  function getUserData() {
    return localStorageService.get('smUser');
  }

}