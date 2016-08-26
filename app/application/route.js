import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from 'parent-app/config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  init() {
    this._super(...arguments);
    this.get('session').on('authenticationSucceeded', () => {
      this.getCurrentUser();
    });
  },

  afterModel() {
    return this.getCurrentUser();
  },

  getCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      const token = this.get('session').get('session.content.authenticated.access_token');

      return fetch(`${config.DS.host}/users/current`, {
          type: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,

          },
        }).then((raw) => raw.json())
        .then((response) => {
          const currentUser = this.store.pushPayload(response);

          this.set('session.currentUser', currentUser);
        });
    }
  },

});
