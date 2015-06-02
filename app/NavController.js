'use strict';

module.exports = NavController;

NavController.$inject = ['$location'];

function NavController($location) {

  var vm = this;
  vm.isSubRoute = isSubRoute;

  ////////////////

  // does string look like a the current url
  // used to set to correct active state on nav tabs with child urls
  function isSubRoute(string) {
    return $location.$$path.indexOf(string) > -1
  }
}