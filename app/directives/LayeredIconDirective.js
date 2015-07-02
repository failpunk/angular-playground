'use strict';

/**
 * Simple directive to easily create SVG icons for StudyMode
 * @type {LayeredIconDirective}
 */

module.exports = LayeredIconDirective;

LayeredIconDirective.$inject = ['_'];

/* @ngInject */
function LayeredIconDirective() {

  var directive = {
    template: '<div class="iconBox">' +
                '<i class="icon front icon_{{front}}"></i>' +
                '<i class="icon back icon_{{back}}"></i>' +
              '</div>',
    restrict: 'E',
    replace: true,
    scope: {
      front: '@',
      back: '@'
    }
  };

  return directive;

}