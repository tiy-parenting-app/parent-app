/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    DS: {
      host: 'http://localhost:3333',
    },
    modulePrefix: 'parent-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ds-pushpayload-return': true,
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    flashMessageDefaults: {
      // flash message defaults
      timeout: 5000,
    },
  };


  ENV['ember-simple-auth'] = {
    baseURL: '/',
    routeAfterAuthentication: 'guest',
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.DS.host = 'https://kin-parenting.herokuapp.com';

  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.DS.host}/token`,
    tokenPropertyName: 'access_token',
  };

  return ENV;
};
