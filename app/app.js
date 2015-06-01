'use strict';

var angular = require('angular');
var ngNewRouter = require('angular-new-router');

require('./dashboard/Dashboard');


var globalDeps = [
  'ngNewRouter',

  // Controllers
  'Dashboard'
];


angular
  .module('Studymode', globalDeps)
  .controller('routeController', routeController);

routeController.$inject = ['$router'];

/* @ngInject */
function routeController($router) {
  /* jshint validthis: true */
  var vm = this;

  $router.config([
    {path:'/', redirectTo:'/profile'},
    {path:'/profile', component:'profile'},
    {path:'/settings/:name', component:'settings'}
  ]);

  vm.name='justin';
}
