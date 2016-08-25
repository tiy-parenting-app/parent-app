import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    userSelect(formValues) {
    const newSelect = this.store.createRecord('user', formValues);

    newSelect.save().then(() => {
      this.transitionToRoute('index');
    });
  },

 },
});
