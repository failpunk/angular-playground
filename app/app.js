'use strict';

var angular = require('angular');
require('ui-router');

require('./dashboard/Dashboard');


var globalDeps = [
  'ui.router',

  'Models.User',
  'Dashboard',
];


angular
  .module('Studymode', globalDeps)
  .config(appConfig);


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
      .state('messages', {
        url: '/dashboard/messages',
        controller: 'MessagesController as vm',
        templateUrl: 'templates/messages.html'
      })
  ;

}


