import Ember from 'ember';

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.set('uploadFile', null);
  },

  actions: {

    saveProfile(profilePromise, formValues) {
      profilePromise.then((profile) => {
        profile.setProperties(formValues);

        profile.save().then(() => {
          this.get('flashMessages').success('Profile updated.');
          this.transitionToRoute('user.profile.me');
        });
      })
    },

    createChild(profilePromise, childValues) {
      profilePromise.then((profile) => {
        const newChild = this.store.createRecord('child', childValues);
        newChild.set('profile', profile);

        newChild.save();
      })
    },

    choosePic(formValues) {
      this.get('filesystem').prompt().then((upload) => {
        formValues.set('uploadFile', upload[0]);
      });
    },
  },
});
