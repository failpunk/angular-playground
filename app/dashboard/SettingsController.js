'use strict';

module.exports = SettingsController;

SettingsController.$inject = ['$log', 'DataService'];

/* @ngInject */
function SettingsController($log, DataService) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new WTF settings ';

  activate();

  ////////////////

  function activate() {
    $log.info('SettingsController loaded');

    DataService.getUser(1).then(function(data) {
      vm.user = data;
    });
  }

}