'use strict';

module.exports = SettingsController;

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

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

}