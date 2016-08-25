import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  session: Ember.inject.service(),

  didReceiveAttrs() {
    this._super(...arguments);

    // Find the other user out of conversation.participants
    // Find the most recent message from the conversation
  },
});
