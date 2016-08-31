import Ember from 'ember';
import config from 'parent-app/config/environment';
import io from 'npm:socket.io-client'

export default Ember.Service.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('socket', io(config.DS.host));

    this.socket.on('message', (message) => {
      this.store.pushPayload(message);
    });
  },

  join(roomId) {
    this.get('socket').emit('join', roomId);
  },
});
