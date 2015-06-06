'use strict';

var angular = require('angular');
var translate = require('../node_modules/angular-translate/dist/angular-translate.min');

var app = angular.module('Studymode', [
  require('ui-router'),
  require('angular-messages'),
  require('angular-toastr'),
  'pascalprecht.translate'
]);

app.value('_', require('lodash'));

app.controller('NavController', require('./NavController'));
app.factory('smAuth', require('./smAuth'));
app.factory('httpRequestInterceptor', require('./httpRequestInterceptor'));
app.config(require('./Config'));
app.config(Translations);
app.config(require('./Interceptors'));
app.run(require('./Run'));

require('./dashboard');
require('./services');


function Translations($translateProvider) {
  $translateProvider
    .translations('en', {
      HEADLINE: 'Hello there, This is my awesome app!',
      INTRO_TEXT: 'And it has i18n support!',
      EMAIL_HEADING: "Email Preferences",
      EMAIL_LEAD: "We'll occasionally send you account notifications and special offers to help you get the most out of StudyMode. We never share or sell your email address or personal information period.",
      CURRENT_EMAIL: 'Current Email',
      NEW_EMAIL: 'New Email'
    });

  $translateProvider.preferredLanguage('en');
}

angular.element(document).ready(function() {
  angular.bootstrap(document, ['Studymode']);
});