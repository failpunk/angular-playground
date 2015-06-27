'use strict';

module.exports = DashboardHeader;

DashboardHeader.$inject = ['_'];

/* @ngInject */
function DashboardHeader(_) {

  var directive = {
    link: link,
    templateUrl: 'templates/dashboardHeaderDirective.html',
    restrict: 'EA',
    scope: true
  };

  return directive;

  function link($scope, element, attrs) {
    attrs.title = _.startCase(attrs.title);
    attrs.userCanUpgrade = userCanUpgrade;

    $scope.attrs = attrs;

    function userCanUpgrade() {
      // logic to determine if user upgrade button should show
      return true;
    }

  }

}