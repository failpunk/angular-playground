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
    $log.info('MessagesController loaded in own dir');

    DataService.getUser().then(function(data) {
      vm.user = data;
    });
  }

}