'use strict';

module.exports = UserMessageDetail;

UserMessageDetail.$inject = [];

/* @ngInject */
function UserMessageDetail() {

  var directive = {
    templateUrl: '../templates/UserMessageDetailDirective.html',
    restrict: 'EA',
    bindToController: true,
    scope: {
      message: '=',
      closeMessage: '&'
    },
    controller: UserMessageDetailController,
    controllerAs: 'vm'
  };

  return directive;

}

UserMessageDetailController.$inject = ['$sce', '$filter'];

function UserMessageDetailController($sce, $filter) {
  /* jshint validthis: true */
  var vm = this;

  vm.getMessageHtml = getMessageHtml;
  vm.getMessageHtml = getMessageHtml;
  vm.messageDate = messageDate;

  ////////////////

  // Render HTML
  function getMessageHtml() {
    return $sce.trustAsHtml(vm.message.body);
  }

  function messageDate() {
    return $filter('date')(vm.message.dateAdded*1000, 'longDate');
  }

}