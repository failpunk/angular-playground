'use strict';

module.exports = PasswordController;

PasswordController.$inject = ['$stateParams', 'UserModel'];

/* @ngInject */
function PasswordController($stateParams, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  vm.passwordsMatch = passwordsMatch;
  vm.submitForm = submit;

  activate();

  ////////////////

  function activate() {
    console.log('PasswordController loaded');

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

  function passwordsMatch() {
    return vm.passwordForm.newPassword.$viewValue === vm.passwordForm.confirmPassword.$viewValue;
  }

  function submit() {
    console.log('submitting...');
  }

}