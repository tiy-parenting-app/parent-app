import Ember from 'ember';

export default Ember.Route.extend({
  model({ user }) {
     return this.store.query('user', {
      filter: {
        account_type: 'parent',
      },
     })
  },

  // afterModel({ id }) {
  //   return this.store.findRecord('parent', {
  //     filter: {
  //       parent: id,
  //     },
  //   });
  // }
});
