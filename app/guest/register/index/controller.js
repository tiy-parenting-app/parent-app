import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    registerUser(formValues) {
      let accountType = 'parent';

      if (!formValues.isParent) {
        accountType = 'sitter'
      }
      const newUser = this.store.createRecord('user', {...formValues, accountType});
      newUser.save().then(() => {
          this.transitionToRoute('guest.login');
        })
        .then(() => {
          this.get('flashMessages').success('You are now registered! Please login to continue.');
          this.transitionToRoute('guest.login');
        })
    },

  },
});
