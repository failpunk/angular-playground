'use strict';
var app = require('angular').module('Studymode');

app.controller('MessagesController', require('./MessagesController'));
app.directive('smUserMessages', require('./userMessagesDirective'));
app.directive('smUserMessagesTable', require('./userMessagesTableDirective'));
app.directive('smUserMessageDetail', require('./userMessageDetailDirective'));