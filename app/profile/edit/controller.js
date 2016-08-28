import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateProfile(user, formValues){
      user.get('profile').then((profile) => {
        profile.setProperties({...formValues});
        profile.save().then(() => {
          this.get('flashMessages').success('Your profile has been updated!');
        });
      });
    },
  },
});
