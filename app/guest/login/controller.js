import Ember from 'ember';
// import flashMessages from 'flash';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    loginUser(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator, {
          identification: formValues.email,
          password: formValues.password,
        })
        .then(() => {
          this.get('flashMessages').success("YAY");
          this.transitionToRoute('guest.welcome');
        });
    },
  },

});
