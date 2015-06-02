'use strict';

module.exports = EmailController;

EmailController.$inject = ['$log', 'DataService'];

/* @ngInject */
function EmailController($log, DataService) {
  /* jshint validthis: true */
  var vm = this;

  vm.submitForm = submit;

  activate();

  ////////////////

  function activate() {
    console.log('EmailController loaded');

    DataService.getUser(1).then(function(data) {
      vm.user = data;
    });
  }

  function submit() {
    $log.info('submitting...');
  }

}