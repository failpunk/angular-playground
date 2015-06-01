var angular = require('angular');
var ngNewRouter = require('angular-new-router');

require('./components/dashboard/dashboard');


var globalDeps = [
  'ngNewRouter',

  // Controllers
  'Dashboard',
  'Other'
];

//angular
//  .module('Studymode', globalDeps)
//  .controller('StudyModeCtrl', StudyModeCtrl);
//
//StudyModeCtrl.$inject = ['$router'];
//
//StudyModeCtrl.$routeConfig = [
//  { path: '/', redirectTo: '/dashboard' },
//  { path: '/dashboard', component: 'dashboard' },
//  { path: '/other', component: 'other' }
//];
//
///* @ngInject */
//function StudyModeCtrl($router) {
//
//}


angular.module('Studymode', ['ngNewRouter'])
  .controller('routeController', ['$router', function($router){
    $router.config([
      {path:'/', redirectTo:'/profile'},
      {path:'/profile', component:'profile'},
      {path:'/settings/:name', component:'settings'}
    ]);

    this.name='justin';
  }])
  .controller('ProfileController', function () {
    console.log('ProfileController loaded');
    this.message = 'Your Profile';
  })
  .controller('SettingsController', function ($routeParams) {
    console.log('SettingsController loaded');
    this.message = 'Your settings ' + $routeParams.name;
  });