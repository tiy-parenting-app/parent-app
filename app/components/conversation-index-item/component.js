import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  session: Ember.inject.service(),

  didReceiveAttrs() {
    this._super(...arguments);
    const currentUser = this.get('session.currentUser');

    // Find the other user out of conversation.participants
    this.get('conversation.participants').then((participants)=> {
      participants.forEach((participant) => {
        if (participant.get('user.id') !== currentUser.get('id')) {
          this.set('otherparticipant', participant);
        }
      });
    });
  },
});
