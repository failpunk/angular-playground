'use strict';

var angular = require('angular');
var translate = require('../node_modules/angular-translate/dist/angular-translate.min');
var angularLocalStorage = require('../node_modules/angular-local-storage/dist/angular-local-storage.min');
var uiBootstrap = require('../node_modules/angular-bootstrap/dist/ui-bootstrap.min');
var uiBootstrapTpls = require('../node_modules/angular-bootstrap/dist/ui-bootstrap-tpls.min');

/**
 * Global Dependencies
 * @type {module}
 */
var app = angular.module('Studymode', [
  require('ui-router'),
  require('angular-messages'),
  require('angular-toastr'),
  'LocalStorageModule',
  'pascalprecht.translate',
  'ui.bootstrap'
]);

/**
 * Wrap external libs in Angular DI
 */
app.value('_', require('lodash'));
app.value('CLIENT_ID', $.stmode.tplVars.client_id);

/**
 * Root
 */
app.controller('NavController', require('./NavController'));
app.factory('smAuth', require('./smAuth'));
app.factory('smUser', require('./smUser'));
app.factory('httpRequestInterceptor', require('./httpRequestInterceptor'));
app.config(require('./Config'));
app.config(require('./Translations'));
app.config(require('./Interceptors'));
app.run(require('./Run'));

/**
 * Require other modules
 */
require('./directives');
require('./dashboard');
require('./services');

/**
 * Manually bootstrap the app
 */
angular.element(document).ready(function() {
  angular.bootstrap(document, ['Studymode']);
});