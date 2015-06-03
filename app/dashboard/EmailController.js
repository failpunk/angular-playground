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

    DataService.getUser(1).then(function(data) {
      vm.user = data;
    });
  }

  function submit() {
    DataService.saveUser(vm.user.id, vm.user)
      .then(function(response) {
        toastr.success('Email preferences updated.');
        $state.transitionTo('settings');
      }, function() {
        toastr.error('Email preferences failed to update.');
      });
  }

}