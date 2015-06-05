'use strict';

module.exports = MessagesController;

MessagesController.$inject = ['$log', 'DataService'];

/* @ngInject */
function MessagesController($log, DataService) {
  /* jshint validthis: true */
  var vm = this;

  activate();

  ////////////////

  function activate() {
    $log.info('MessagesController loaded');

    DataService.getUser().then(function(data) {
      vm.user = data;
    });
  }

}