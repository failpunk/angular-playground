'use strict';

module.exports = ProfileController;

ProfileController.$inject = ['$log', 'UserModel'];

/* @ngInject */
function ProfileController($log, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new Profile';

  activate();

  ////////////////

  function activate() {
    $log.info('ProfileController loaded');

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

}