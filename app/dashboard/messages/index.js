'use strict';
var app = require('angular').module('Studymode');

app.controller('MessagesController', require('./MessagesController'));
app.controller('MessageDetailsController', require('./MessageDetailsController'));
app.directive('smUserMessagesTable', require('./userMessagesTableDirective'));