'use strict';

module.exports = MessagesController;

MessagesController.$inject = ['$log', 'DataService', 'smUser'];

/* @ngInject */
function MessagesController($log, DataService, smUser) {
  /* jshint validthis: true */
  var vm = this;

  vm.messages = [];

  activate();

  ////////////////

  function activate() {
    $log.info('MessagesController loaded');

    vm.user = smUser.getUserData();

    DataService.getUserMessages(vm.user.userId).then(function(messages) {
      vm.messages = messages;
    });
  }

}