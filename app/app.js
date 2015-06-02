'use strict';

var angular = require('angular');
require('ui-router');

require('./dashboard/Dashboard');


var globalDeps = [
  'ui.router',
  require('angular-messages'),

  'Models.User',
  'Dashboard',
];


angular
  .module('Studymode', globalDeps)
  .controller('NavController', NavController)
  .config(appConfig)
  .run(Run);


Run.$inject = ['$rootScope', '$state'];

function Run($rootScope, $state) {
  // make current rout available on the root scope
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    $rootScope.state = toState;
  })
}


appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard/profile');

  $stateProvider
      .state('profile', {
        url: '/dashboard/profile',
        controller: 'ProfileController as vm',
        templateUrl: 'templates/profile.html'
      })
      .state('settings', {
        url: '/dashboard/settings',
        controller: 'SettingsController as vm',
        templateUrl: 'templates/settings.html'
      })
          .state('password', {
            url: '/dashboard/settings/password',
            controller: 'PasswordController as vm',
            templateUrl: 'templates/password.html'
          })
      .state('messages', {
        url: '/dashboard/messages',
        controller: 'MessagesController as vm',
        templateUrl: 'templates/messages.html'
      })
  ;
}

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