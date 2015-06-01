'use strict';

angular
  .module('Dashboard.Settings', [])
  .controller('SettingsController', SettingsController);

SettingsController.$inject = ['$routeParams', 'UserModel'];

/* @ngInject */
function SettingsController($routeParams, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new WTF settings ' + $routeParams.name;

  activate();

  ////////////////

  function activate() {
    console.log('SettingsController loaded');

    UserModel.fetch(1).then(function(user) {
      vm.user = user;
    });
  }

}

module.exports = 'Dashboard.Settings';