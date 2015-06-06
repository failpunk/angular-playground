'use strict';

module.exports = PasswordController;

PasswordController.$inject = ['$log', 'DataService', 'toastr', '$state', '_'];

/* @ngInject */
function PasswordController($log, DataService, toastr, $state, _) {
  /* jshint validthis: true */
  var vm = this;

  vm.passwordsMatch = passwordsMatch;
  vm.submitForm = submit;

  activate();

  ////////////////

  function activate() {
    console.log('PasswordController loaded');

    DataService.getUser().then(function(data) {
      vm.user = data;
    });
  }

  function passwordsMatch() {
    return vm.passwordForm.newPassword.$viewValue === vm.passwordForm.confirmPassword.$viewValue;
  }

  function submit() {
    DataService.updatePassword(vm.oldPassword, vm.newPassword)
      .then(function() {
        toastr.success('Password updated.');
        $state.transitionTo('settings');
      }, function(errors) {
        _.forEach(errors, function(error) {
          error = _.isArray(error) ? error[0] : error;
          console.log(error);
          toastr.error(error);
        });

        vm.passwordForm.$submitted = false;
      });
  }

}