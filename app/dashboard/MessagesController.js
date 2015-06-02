'use strict';

module.exports = MessagesController;

MessagesController.$inject = ['$log', 'UserModel'];

/* @ngInject */
function MessagesController($log, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  activate();

  ////////////////

  function activate() {
    $log.info('MessagesController loaded');

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

}