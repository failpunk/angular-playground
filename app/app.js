var angular = require('angular');

angular.module('studymode', [

]);

angular
  .module('studymode')
  .controller('testCtrl', TestCtrl)

.$inject = [''];

/* @ngInject */
function TestCtrl() {
  /* jshint validthis: true */
  var vm = this;

  vm.activate = activate;
  vm.title = 'ALIVE!!!!';

  activate();

  ////////////////

  function activate() {
  }


}