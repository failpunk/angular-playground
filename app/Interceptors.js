'use strict';

module.exports = Interceptors;

Interceptors.$inject = ['$httpProvider'];

function Interceptors($httpProvider) {

  $httpProvider.interceptors.push('httpRequestInterceptor');

}