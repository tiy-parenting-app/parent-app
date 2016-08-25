import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    registerUser(formValues) {
      const newUser = this.store.createRecord('user', formValues);

      newUser.save().then(() => {
        this.transitionToRoute('index.login');
      })
      .then(() => {
        this.get('flashMessages').success('You are now registerd! Please login to continue.');
        this.transitionToRoute('index.login');
      })
    },
  },
});
