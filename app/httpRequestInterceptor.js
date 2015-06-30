'use strict';

module.exports = httpRequestInterceptor;

httpRequestInterceptor.$inject = ['$q', '_', 'smAuth', 'CLIENT_ID'];

function httpRequestInterceptor($q, _, smAuth, CLIENT_ID) {

  return {

    request: function (config) {

      fixApiUrl(config);

      return config;
    },

    response: function (config) {
      // Return the config or wrap it in a promise if blank.
      return config || $q.when(config);
    }
  };

  /**
   * Make old API calls a bit more restful by setting correct return status
   * @param config
   */
  function fixApiResponse(config) {

    if (_.has(config.data, 'success')) {
      if (config.data.success === false) {
        config.status = 400;
      }
    }
  }

  /**
   * Add access token to all requests if signed in
   * @param config
   */
  function addAccessToken(config) {
    if (smAuth.signedIn()) {
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
      client_id: CLIENT_ID
    });
  }

  function fixApiUrl(config) {
    // skip templates calls
    if(/api/.test(config.url)) {
      // modify url
      config.url = 'http://localhost:3000' + config.url;
    }

    return config;
  }
}