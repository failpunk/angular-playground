angular
  .module('Dashboard', [])
  .controller('DashboardCtrl', DashboardCtrl)

  .$inject = ['$http', '$router'];

/* @ngInject */
function DashboardCtrl($http, $router) {
  /* jshint validthis: true */
  var vm = this;
console.log('DashboardCtrl', $router);
  vm.activate = activate;
  vm.title = 'Dashboard';

  activate();

  ////////////////

  function activate() {
  }


}