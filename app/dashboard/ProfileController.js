'use strict';

angular
  .module('Dashboard.Profile', [])
  .controller('ProfileController', ProfileController);

ProfileController.$inject = ['$stateParams', 'UserModel'];

/* @ngInject */
function ProfileController($stateParams, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new Profile';

  activate();

  ////////////////

  function activate() {
    console.log('ProfileController loaded');

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

}

module.exports = 'Dashboard.Profile';