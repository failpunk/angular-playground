'use strict';

angular
  .module('Dashboard.Messages', [])
  .controller('MessagesController', MessagesController);

MessagesController.$inject = ['$stateParams'];

/* @ngInject */
function MessagesController($stateParams) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = 'Messages module and stuff';

  activate();

  ////////////////

  function activate() {
    console.log('MessagesController loaded');
  }

}