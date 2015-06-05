'use strict';

module.exports = ProfileController;

ProfileController.$inject = ['$log', 'DataService', 'toastr'];

/* @ngInject */
function ProfileController($log, DataService, toastr) {
  /* jshint validthis: true */
  var vm = this;

  vm.auth = auth;

  activate();

  ////////////////

  function activate() {
    $log.info('ProfileController loaded');

    //DataService.getUser(1).then(function(data) {
    //  vm.user = data;
    //});
  }

  function auth() {
    DataService.authenticate(vm.username, vm.password)
      .then(function(response) {
      }, function(response) {
        toastr.error(response.data.error_description);
      })
  }

}