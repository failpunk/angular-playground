'use strict';

module.exports = Config;

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

function Config($stateProvider, $urlRouterProvider) {

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