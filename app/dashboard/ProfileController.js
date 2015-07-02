'use strict';

module.exports = ProfileController;

ProfileController.$inject = ['$log', 'DataService', 'toastr', '$state'];

/* @ngInject */
function ProfileController($log, DataService, toastr, $state) {
  /* jshint validthis: true */
  var vm = this;

  vm.user = {};

  activate();

  ////////////////

  function activate() {
    $log.info('ProfileController loaded');
  }

  //function auth() {
  //  DataService.authenticate(vm.username, vm.password)
  //    .then(authSuccess, authError);
  //
  //  function authSuccess(auth) {
  //    toastr.success("You've been signed in " + auth.user_name);
  //    $state.transitionTo('settings');
  //  }
  //
  //  function authError(error) {
  //    toastr.error(error);
  //  }
  //}

}