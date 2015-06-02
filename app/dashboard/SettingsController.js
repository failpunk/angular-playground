'use strict';

module.exports = SettingsController;

SettingsController.$inject = ['$log', 'UserModel'];

/* @ngInject */
function SettingsController($log, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new WTF settings ';

  activate();

  ////////////////

  function activate() {
    $log.info('SettingsController loaded');

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

}