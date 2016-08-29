import Ember from 'ember';

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.set('uploadFile', null);
  },

  actions: {

    saveProfile(newEdits, formValues) {
      newEdits.then((profile) => {
        profile.setProperties(formValues);

        profile.save().then(() => {
          this.get('flashMessages').success('Profile updated.');
          this.transitionToRoute('profile.view.me');
        });
      })
    },
    selectPhoto() {
      this.get('filesystem').prompt().then((upload) => {
        this.set('uploadFile', upload[0]);
      });
    },
  },
});
