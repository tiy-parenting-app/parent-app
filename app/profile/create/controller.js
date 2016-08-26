import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveProfile(formValues) {
      const newProfile = this.store.createRecord('profile', formValues);
      newProfile.save().then(() => {

        this.transitionToRoute('profile.view.parent');
      });
    },

    selectPhoto() {
      this.get('filesystem').prompt().then((upload) => {
        this.set('uploadFile', upload[0]);
      });
    },
  },
});
