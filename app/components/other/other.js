angular
  .module('Other', [])
  .controller('OtherController', OtherController)

  .$inject = ['$http', '$router'];

/* @ngInject */
function OtherController($http, $router) {
  /* jshint validthis: true */
  var vm = this;
console.log('OtherController', $router);
  vm.activate = activate;
  vm.title = 'Other';

  activate();

  ////////////////

  function activate() {
  }


}