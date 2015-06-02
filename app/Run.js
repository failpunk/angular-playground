'use strict';

module.exports = Run;

Run.$inject = ['$rootScope'];

function Run($rootScope) {
  // make current rout available on the root scope
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    $rootScope.state = toState;
  })
}