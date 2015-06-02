'use strict';
var app = require('angular').module('Studymode');

app.controller('ProfileController', require('./ProfileController'));
app.controller('SettingsController', require('./SettingsController'));
app.controller('MessagesController', require('./MessagesController'));
app.controller('PasswordController', require('./PasswordController'));