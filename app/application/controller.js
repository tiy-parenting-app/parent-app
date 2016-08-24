import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    toggleBubble(){
      const bubble = document.querySelector(".bubble");
      bubble.classList.toggle('bubble__off');
    },
  },
});
