import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleBubble(){
      const bubble = document.querySelector(".bubble");
      bubble.classList.toggle('bubble__off');
    },
  },
});
