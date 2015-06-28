'use strict';

module.exports = UserMessages;

UserMessages.$inject = [];

/* @ngInject */
function UserMessages() {

  var directive = {
    templateUrl: '../templates/userMessagesDirective.html',
    restrict: 'EA',
    bindToController: true,
    scope: {
      smUser: '='
    },
    controller: UserMessagesController,
    controllerAs: 'vm'
  };

  return directive;

}

UserMessagesController.$inject = ['DataService'];

function UserMessagesController(DataService) {
  /* jshint validthis: true */
  var vm = this;

  vm.messages = [];
  vm.selectedMessage = null;
  vm.selectMessage = selectMessage;
  vm.closeMessage = closeMessage;

  activate();

  ////////////////

  function activate() {
    DataService.getUserMessages(vm.smUser.userId).then(function(messages) {
      vm.messages = messages;
    });
  }

  function selectMessage(message) {
    console.log('message selected', message);
    vm.selectedMessage = message;
  }

  // Closes the message detail view
  function closeMessage() {
    console.log('closeMessage');
    vm.selectedMessage = null;
  }

}