'use strict';

require('./SettingsController');
require('./ProfileController');
require('./MessagesController');
require('./PasswordController');

angular.module('Dashboard', [
  'Dashboard.Profile',
  'Dashboard.Settings',
  'Dashboard.Messages',
  'Dashboard.Settings.Password',
]);

module.exports = 'Dashboard';