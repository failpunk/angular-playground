'use strict';

module.exports = MessagesController;

MessagesController.$inject = ['$stateParams', 'UserModel'];

/* @ngInject */
function MessagesController($stateParams, UserModel) {
  /* jshint validthis: true */
  var vm = this;

  activate();

  ////////////////

  function activate() {
    console.log('MessagesController loaded');

    UserModel.fetch(1).then(function(data) {
      vm.user = data;
    });
  }

}