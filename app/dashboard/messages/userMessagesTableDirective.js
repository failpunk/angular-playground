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
      messages: '='
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

  vm.toggleMessage = toggleMessage;
  vm.toggleAllMessages = toggleAllMessages;
  vm.markAsRead = markAsRead;
  vm.deleteMessages = deleteMessages;

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
    return _.findWhere(vm.messages, { 'isSelected': true });
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

  function markAsRead() {

  }

  function deleteMessages() {

  }

}