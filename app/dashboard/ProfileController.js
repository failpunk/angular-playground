'use strict';

module.exports = ProfileController;

ProfileController.$inject = ['$log', 'DataService'];

/* @ngInject */
function ProfileController($log, DataService) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new Profile';

  activate();

  ////////////////

  function activate() {
    $log.info('ProfileController loaded');

    DataService.getUser(1).then(function(data) {
      vm.user = data;
    });
  }

}