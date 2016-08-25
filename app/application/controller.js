import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    toggleBubble(){
      const bubble = document.querySelector(".bubble");
      bubble.classList.toggle('bubble__off');
    },

    invalidateSession() {
      this.get('session').invalidate();
      this.get('flashMessages').success('You are now logged out!');
      this.transitionToRoute('index.welcome');
    },
  },
});
