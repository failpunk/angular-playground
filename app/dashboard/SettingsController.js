'use strict';

module.exports = SettingsController;

SettingsController.$inject = ['$log', 'DataService'];

/* @ngInject */
function SettingsController($log, DataService) {
  /* jshint validthis: true */
  var vm = this;

  activate();

  ////////////////

  function activate() {
    $log.info('SettingsController loaded');

    DataService.getUser().then(function(data) {
      vm.user = data;
    });
  }

}