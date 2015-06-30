'use strict';

module.exports = MessageDetailsController;

MessageDetailsController.$inject = ['$log', 'DataService', '$stateParams', '$sce', '$filter', '$state', 'toastr'];

/* @ngInject */
function MessageDetailsController($log, DataService, $stateParams, $sce, $filter, $state, toastr) {
  /* jshint validthis: true */
  var vm = this;

  vm.message = "";
  vm.getMessageHtml = getMessageHtml;
  vm.messageDate = messageDate;
  vm.deleteMessage = deleteMessage;

  activate();

  ////////////////

  function activate() {
    $log.info('MessageDetailsController loaded in own dir');

    DataService.getMessage($stateParams.messageId).then(function (message) {
      vm.message = message;
    });
  }


  // Render HTML
  function getMessageHtml() {
    return $sce.trustAsHtml(vm.message.body);
  }

  function messageDate() {
    if (vm.message.dateAdded) {
      return $filter('date')(vm.message.dateAdded * 1000, 'longDate');
    }
  }

  function deleteMessage() {
    DataService.deleteMessage(vm.message.id)
        .then(messageDeleteSuccess)
        .catch(messageDeleteFailure);

    function messageDeleteSuccess() {
      toastr.success('Your message has been deleted');
      $state.go('messages');
    }

    function messageDeleteFailure(msg) {
      toastr.error(msg);
    }
  }

}