'use strict';

module.exports = MessagesController;

MessagesController.$inject = ['$log', 'DataService', '$translate'];

/* @ngInject */
function MessagesController($log, DataService, $translate) {
  /* jshint validthis: true */
  var vm = this;

  vm.changeLang = changeLang;

  activate();

  ////////////////

  function activate() {
    $log.info('MessagesController loaded');

    DataService.getUser().then(function(data) {
      vm.user = data;
    });
  }

  function changeLang(lang) {
    $translate.use(lang);
  }

}