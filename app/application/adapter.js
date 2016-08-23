import DS from 'ember-data';
import config from 'parent-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  // authorizer: 'authorizer:token',
  namespace: config.DS.namespace,
  host: config.DS.host,

});
