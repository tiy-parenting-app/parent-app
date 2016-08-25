import DS from 'ember-data';
import config from 'parent-app/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  namespace: config.DS.namespace,
  host: config.DS.host,

});
