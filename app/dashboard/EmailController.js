'use strict';

module.exports = EmailController;

EmailController.$inject = ['$log', 'DataService', 'toastr', '$state'];

/* @ngInject */
function EmailController($log, DataService, toastr, $state) {
  /* jshint validthis: true */
  var vm = this;

  vm.submitForm = submit;
  vm.modifyingEmail = false;

  activate();

  ////////////////

  function activate() {
    console.log('EmailController loaded');

    DataService.getUser().then(function(data) {
      vm.user = data;
    });
  }

  function submit() {
    DataService.updateEmail(vm.email)
      .then(function(response) {
        vm.user.email = vm.email;
        toastr.success('Email preferences updated.');
        $state.transitionTo('settings');
      }, function() {
        toastr.error('Email preferences failed to update.');
      });
  }

}