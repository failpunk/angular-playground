'use strict';

module.exports = DashboardHeader;

DashboardHeader.$inject = ['_'];

/* @ngInject */
function DashboardHeader() {

  var directive = {
    templateUrl: 'templates/dashboardHeaderDirective.html',
    restrict: 'EA',
    bindToController: true,
    scope: {
      title: '@',
      subtitle: '@',
      breadcrumbs: '@'
    },
    controller: DashboardHeaderController,
    controllerAs: 'vm'
  };

  return directive;

}

function DashboardHeaderController() {
  /* jshint validthis: true */
  var vm = this;

  activate();

  ////////////////

  function activate() {
    canUserUpgrade();
  }

  function canUserUpgrade() {
    // logic to determine if user upgrade button should show
    vm.showUpgradeButton = true;
  }

}