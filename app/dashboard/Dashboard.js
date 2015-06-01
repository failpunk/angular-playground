'use strict';

require('./SettingsController');
require('./ProfileController');
require('./MessagesController');

angular.module('Dashboard', [
  'Dashboard.Profile',
  'Dashboard.Settings',
  'Dashboard.Messages'
]);

module.exports = 'Dashboard';