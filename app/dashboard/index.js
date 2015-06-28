'use strict';
var app = require('angular').module('Studymode');

app.controller('ProfileController', require('./ProfileController'));
app.controller('SettingsController', require('./SettingsController'));
app.controller('PasswordController', require('./PasswordController'));
app.controller('EmailController', require('./EmailController'));
app.directive('dashboardHeader', require('./DashboardHeaderDirective'));

/**
 * Require sub modules
 */
require('./messages');