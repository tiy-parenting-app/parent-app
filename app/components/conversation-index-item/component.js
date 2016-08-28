import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  session: Ember.inject.service(),

  didReceiveAttrs() {
    this._super(...arguments);
    const currentUser = this.get('session.currentUser');

    this.get('conversation.participants').then((participants)=> {
      participants.forEach((participant) => {
        if (participant.get('user.id') !== currentUser.get('id')) {
          this.set('otherparticipant', participant);
        }
      });
    });
  },
});
