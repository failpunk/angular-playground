'use strict';

/**
 * Simple directive to easily create SVG icons for StudyMode
 * @type {PaginatorDirective}
 */

module.exports = PaginatorDirective;

PaginatorDirective.$inject = ['_'];

/* @ngInject */
function PaginatorDirective() {

  var directive = {
    template: '<div>' +
                '<pagination ' +
                  'ng-change="vm.paginationChanged()"' +
                  'ng-model="vm.meta.page" ' +
                  'total-items="vm.meta.count" ' +
                  'items-per-page="vm.meta.limit"> ' +
                  'direction-links="false" ' +
                '</pagination> ' +
              '</div>',
    restrict: 'E',
    replace: true,
    bindToController: true,
    scope: {
      meta: '=',
      callback: '='
    },
    controller: PaginatorController,
    controllerAs: 'vm'
  };

  return directive;

}

function PaginatorController() {
  var vm = this;

  vm.paginationChanged = paginationChanged;

  ////////////

  function paginationChanged() {
    console.log('paginationChanged');
    var params = {
      limit: vm.meta.limit,
      page: vm.meta.page
    };

    vm.callback(params);
  }

}