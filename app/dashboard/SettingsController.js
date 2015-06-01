'use strict';

angular
  .module('Dashboard.Settings', [])
  .controller('SettingsController', SettingsController);

SettingsController.$inject = ['$routeParams'];

/* @ngInject */
function SettingsController($routeParams) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new WTF settings ' + $routeParams.name;

  activate();

  ////////////////

  function activate() {
    console.log('SettingsController loaded');
  }

}

module.exports = 'Dashboard.Settings';