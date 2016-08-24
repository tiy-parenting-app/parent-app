import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    loginUser(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator, {
          identification: formValues.email,
          password: formValues.password
        })
        .then(() => {
          this.transitionToRoute('guest.welcome');
        });
    },

    displayFlash() {
      const flashMessages = Ember.get(this, 'flashMessages');

      Ember.get(this, 'model')
        .save()
        .then(() => {
          flashMessages.success('SUCCESS!');
        });
    },

  },

});
