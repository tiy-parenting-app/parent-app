import Ember from 'ember';

export default Ember.Route.extend({
  model({user_id}) {
    return this.store.queryRecord('conversation', {
      filter: {
        user: user_id,
      },
    });
  },

  afterModel(conversation) {
    this.transitionTo('user.conversation.message', conversation);
  },
});
