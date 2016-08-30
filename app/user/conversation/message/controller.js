import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendMessage(conversation, form, reset) {
      const message = this.store.createRecord('message', form);
      message.set('conversation', conversation)
      this.set('disableForm', true);

      message.save().then(() => {
        this.set('disableForm', false);
        reset();
      });
    },
  },
});
