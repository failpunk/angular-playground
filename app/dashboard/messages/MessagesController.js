'use strict';

module.exports = MessagesController;

MessagesController.$inject = ['$log', 'DataService', 'smUser', '$q', '_', 'toastr'];

/* @ngInject */
function MessagesController($log, DataService, smUser, $q, _, toastr) {
  /* jshint validthis: true */
  var vm = this;

  vm.user = smUser.getUserData();

  vm.messages = [];

  vm.markAsRead = markAsRead;
  vm.deleteMessages = deleteMessages;

  activate();

  ////////////////

  function activate() {
    $log.info('MessagesController loaded');

    DataService.getUserMessages(vm.user.userId).then(function(messages) {
      vm.messages = messages;
    });
  }

  /**
   * Mark an array of messages as read
   * @param messages
   */
  function markAsRead(messages) {
    var requests = [];
    _.forEach(messages, function (message) {
      requests.push(
          DataService.updateMessage(message.id, {status: 'read'})
      );
    });

    completeRequests(requests, requests.length + ' messages marked as read');
  }

  /**
   * Delete an array of messages
   * @param messages
   */
  function deleteMessages(messages) {
    var requests = [];
    _.forEach(messages, function (message) {
      requests.push(
          DataService.deleteMessage(message.id)
      );
    });

    completeRequests(requests, requests.length + ' messages have been deleted');
  }

  /**
   * Wait for all requests to finish, show message if needed, and refresh data
   * @param requests
   */
  function completeRequests(requests, msg) {
    $q.all(requests)
        .then(messageSuccess(msg))
        .catch(messageFailure)
        .finally(activate);

    function messageSuccess(msg) {
      if(msg) {
        toastr.success(msg);
      }
    }

    function messageFailure(msg) {
      toastr.error(msg);
    }
  }

}