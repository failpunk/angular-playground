'use strict';

module.exports = ProfileController;

ProfileController.$inject = ['$log', 'DataService', 'toastr'];

/* @ngInject */
function ProfileController($log, DataService, toastr) {
  /* jshint validthis: true */
  var vm = this;

  vm.auth = auth;
  vm.user = {};

  activate();

  ////////////////

  function activate() {
    $log.info('ProfileController loaded');
  }

  function auth() {
    DataService.authenticate(vm.username, vm.password)
      .then(success, error)
  }

  function success(data) {
    toastr.success("You've been signed in " + data.user_name);
  }

  function error(message) {
    toastr.error(message);
  }

}