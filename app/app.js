'use strict';

var angular = require('angular');
var uiRouter = require('ui-router');

require('./dashboard/Dashboard');


var globalDeps = [
  'ui.router',

  // Controllers
  'Dashboard',
];


angular
  .module('Studymode', globalDeps)
  .factory('UserModel', UserModel)
  .config(appConfig);


appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard/profile');

  $stateProvider
    //.state('dashboard', {
    //  url: '/dashboard',
    //  controller: 'dashboardController',
    //  controllerAs: 'vm',
    //  templateUrl: 'app/dashboard/templates/settings.html'
    //})
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


UserModel.$inject = ['$http'];

/* @ngInject */
function UserModel($http) {
  var service = {
    fetch: fetch
  };

  return service;

  ////////////////

  function fetch(id) {
    return $http.get('http://jsonplaceholder.typicode.com/users/' + id);
  }

}