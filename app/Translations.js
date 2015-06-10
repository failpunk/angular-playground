'use strict';

module.exports = Translations;

Translations.$inject = ['$translateProvider'];

function Translations($translateProvider) {

  //todo:justin Load from server

  $translateProvider.translations('en', English);
  $translateProvider.translations('de', German);

  $translateProvider.preferredLanguage('en');
}


var English = {
  HEADLINE: 'Translations Are Working!!',
  INTRO_TEXT: 'This text is from a translations map that we can load from a server and change languages! What do you think {{username}}',
  EMAIL_HEADING: "Email Preferences",
  EMAIL_LEAD: "We'll occasionally send you account notifications and special offers to help you get the most out of StudyMode. We never share or sell your email address or personal information period.",
  CURRENT_EMAIL: 'Current Email',
  NEW_EMAIL: 'New Email'
};

var German = {
  HEADLINE: 'Übersetzungen arbeiten!!',
  INTRO_TEXT: 'Dieser Text ist von einer Karte Übersetzungen , die wir von einem Server und Änderung Sprachen geladen werden! Was denken Sie {{username}}',
  EMAIL_HEADING: "E-Mail- Einstellungen",
  EMAIL_LEAD: "We'll occasionally send you account notifications and special offers to help you get the most out of StudyMode. We never share or sell your email address or personal information period.",
  CURRENT_EMAIL: 'Current Email',
  NEW_EMAIL: 'New Email'
};