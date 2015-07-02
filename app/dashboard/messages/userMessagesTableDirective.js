'use strict';

module.exports = UserMessagesTable;

UserMessagesTable.$inject = ['_'];

/* @ngInject */
function UserMessagesTable() {

  var directive = {
    templateUrl: '../templates/UserMessagesTableDirective.html',
    restrict: 'EA',
    bindToController: true,
    scope: {
      messages: '=',
      markAsRead: '&',
      deleteMessages: '&'
    },
    controller: UserMessagesTableController,
    controllerAs: 'vm'
  };

  return directive;

}

UserMessagesTableController.$inject = ['_'];

function UserMessagesTableController(_) {
  /* jshint validthis: true */
  var vm = this;

  vm.showMessageActions = false;
  vm.selectAllMessages = false;
  vm.sortReverse = false;

  vm.toggleMessage = toggleMessage;
  vm.toggleAllMessages = toggleAllMessages;
  vm.getSelected = getSelected;
  vm.allRead = allRead;

  ////////////////

  /**
   * Add message if not already selected
   * @param message
   */
  function toggleMessage() {
    vm.showMessageActions = getSelected() ? true : false;
  }

  /**
   * Get list of currently selected messages
   * @returns {*}
   */
  function getSelected() {
    return _.where(vm.messages, { 'isSelected': true });
  }

  /**
   * Select all messages
   */
  function toggleAllMessages() {
    _.forEach(vm.messages, function(message) {
      message.isSelected = vm.selectAllMessages;    // set to state of select-all checkbox
    });

    toggleMessage();  // update state
  }

  function allRead() {
    vm.markAsRead({messages: vm.getSelected()});
    toggleMessage();
  }

}