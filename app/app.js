'use strict';

var angular = require('angular');

var app = angular.module('Studymode', [
  require('ui-router'),
  require('angular-messages')
]);

app.controller('NavController', require('./NavController'));
app.config(require('./Config'));
app.run(require('./Run'));


require('./dashboard');
require('./services');