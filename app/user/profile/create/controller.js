import Ember from 'ember';

export default Ember.Controller.extend({
    filesystem: Ember.inject.service(),
    session: Ember.inject.service(),

    init() {
      this._super(...arguments);
      this.set('uploadFile', null);
    },

    actions: {
    saveProfile(formValues) {
      const newProfile = this.store.createRecord('profile', formValues);
      newProfile.save().then(() => {

        this.transitionToRoute('profile.view.me');
      });
    },

    selectPhoto() {
      this.get('filesystem').prompt().then((upload) => {
        this.set('uploadFile', upload[0]);
      });
    },
  },
});
