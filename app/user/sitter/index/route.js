import Ember from 'ember';

export default Ember.Route.extend({
  model({ user }) {
     return this.store.query('user', {
      filter: {
        'account-type': 'sitter',
      },
     })
  },
});
