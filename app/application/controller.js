import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    displayFlash() {
      const flashMessages = Ember.get(this, 'flashMessages');

      Ember.get(this, 'model')
        .save()
        .then((response) => {
          flashMessages.success('SUCCESS!');
        });
    },
    toggleBubble(){
      const bubble = document.querySelector(".bubble");
      bubble.classList.toggle('bubble__off');
    },
  },
});
