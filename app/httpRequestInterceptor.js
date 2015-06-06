'use strict';

module.exports = httpRequestInterceptor;

httpRequestInterceptor.$inject = ['$q', '_', 'smAuth'];

function httpRequestInterceptor($q, _, smAuth) {

  return {

    request: function (config) {

      addAccessToken(config);
      addClientId(config);

      return config;
    },

    response: function (config) {

      fixApiResponse(config);

      if(config.status > 200) {
        return $q.reject(config);
      }

      // Return the config or wrap it in a promise if blank.
      return config || $q.when(config);
    }
  };

  function fixApiResponse(config) {

    // Make old API calls a bit more restful by setting correct return status
    if(_.has(config.data, 'success')) {
      if(config.data.success === false) {
        config.status = 400;
      }
    }
  }

  /**
   * Add access token to all requests if signed in
   * @param config
   */
  function addAccessToken(config) {
    if(smAuth.signedIn()) {
      config.headers = angular.extend(config.headers, {
        Token: smAuth.getTokenHeader()
      });
    }
  }

  /**
   * Add client id to all outgoing requests
   * @param config
   */
  function addClientId(config) {
    config.data = angular.extend(config.data || {}, {
      client_id: $.stmode.tplVars.client_id
    });
  }
}