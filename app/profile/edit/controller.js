import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  updateProfile(newEdits, formValues) {
    newEdits.setProperties(formValues);

    newEdits.save().then(() => {
      this.get('flashMessages').success('Profile updated.');
      this.transitionToRoute('profile.view.me');
    });
  },
},
});
