'use strict';

module.exports = PasswordController;

PasswordController.$inject = ['$log', 'DataService', 'toastr', '$state'];

/* @ngInject */
function PasswordController($log, DataService, toastr, $state) {
  /* jshint validthis: true */
  var vm = this;

  vm.passwordsMatch = passwordsMatch;
  vm.submitForm = submit;

  activate();

  ////////////////

  function activate() {
    console.log('PasswordController loaded');

    DataService.getUser(1).then(function(data) {
      vm.user = data;
    });
  }

  function passwordsMatch() {
    return vm.passwordForm.newPassword.$viewValue === vm.passwordForm.confirmPassword.$viewValue;
  }

  function submit() {
    vm.user.password = vm.newPassword;

    DataService.saveUser(vm.user.id, vm.user)
      .then(function() {
        toastr.success('Password updated.');
        $state.transitionTo('settings');
      }, function() {
        toastr.error('Password failed to update.');
      });
  }

}