import Ember from 'ember';
// import flashMessages from 'flash';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),
  session: Ember.inject.service('session'),

  actions: {
    loginUser(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator, {
          identification: formValues.email,
          password: formValues.password,
        })
        .then(() => {
          this.get('flashMessages').success('You are now logged in!');
          this.transitionToRoute('guest.welcome');
        })
        .catch((reason) => {
          this.get('flashMessages').danger('Login attempt failed. Did you enter the correct email and password?');
          console.log(reason);
        })
    },
  },
});
