'use strict';

module.exports = Translations;

Translations.$inject = ['$translateProvider'];

function Translations($translateProvider) {

  //todo:justin Load from server

  $translateProvider
    .translations('en', {
      HEADLINE: 'Translations Are Working!!',
      INTRO_TEXT: 'This text is from a translations map',
      EMAIL_HEADING: "Email Preferences",
      EMAIL_LEAD: "We'll occasionally send you account notifications and special offers to help you get the most out of StudyMode. We never share or sell your email address or personal information period.",
      CURRENT_EMAIL: 'Current Email',
      NEW_EMAIL: 'New Email'
    });

  $translateProvider.preferredLanguage('en');
}