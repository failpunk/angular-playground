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
  .controller('routeController', routeController)
  .controller('UserModel', UserModel)
  .config(['$componentLoaderProvider', templateLoader]);

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

function templateLoader($componentLoaderProvider) {
  $componentLoaderProvider.setTemplateMapping(function (name) {
    return 'templates/' + name + '.html';
  });
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