'use strict';

angular
  .module('Dashboard.Settings', [])
  .controller('SettingsController', SettingsController);

SettingsController.$inject = ['$stateParams', 'UserModel'];

/* @ngInject */
function SettingsController($stateParams, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new WTF settings ';

  activate();

  ////////////////

  function activate() {
    console.log('SettingsController loaded');

    UserModel.fetch(1).then(function(response) {
      vm.user = response.data;
      console.log('user', vm.user);
    });
  }

}

module.exports = 'Dashboard.Settings';