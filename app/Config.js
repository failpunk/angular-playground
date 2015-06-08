'use strict';

module.exports = Config;

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider'];

function Config($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

  $uiViewScrollProvider.useAnchorScroll();

  $urlRouterProvider.otherwise('/dashboard/profile');

  $stateProvider
    .state('profile', {
      url: '/dashboard/profile',
      controller: 'ProfileController as vm',
      templateUrl: 'templates/profile.html',
      deepStateRedirect: true
    })
    .state('settings', {
      url: '/dashboard/settings',
      controller: 'SettingsController as vm',
      templateUrl: 'templates/settings.html',
      deepStateRedirect: true
    })
      .state('password', {
        url: '/dashboard/settings/password',
        controller: 'PasswordController as vm',
        templateUrl: 'templates/password.html'
      })
      .state('email', {
        url: '/dashboard/settings/email',
        controller: 'EmailController as vm',
        templateUrl: 'templates/email.html'
      })
    .state('messages', {
      url: '/dashboard/messages',
      controller: 'MessagesController as vm',
      templateUrl: 'templates/messages.html',
      deepStateRedirect: true
    })
  ;
}