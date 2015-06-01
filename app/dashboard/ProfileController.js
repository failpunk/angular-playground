'use strict';

angular
  .module('Dashboard.Profile', [])
  .controller('ProfileController', ProfileController);

ProfileController.$inject = ['$stateParams'];

/* @ngInject */
function ProfileController($stateParams) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Your new Profile';

  activate();

  ////////////////

  function activate() {
    console.log('ProfileController loaded');
  }

}

module.exports = 'Dashboard.Profile';