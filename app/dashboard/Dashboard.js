'use strict';

require('./SettingsController');
require('./ProfileController');

angular.module('Dashboard', [
  'Dashboard.Profile',
  'Dashboard.Settings'
]);


module.exports = 'Dashboard';