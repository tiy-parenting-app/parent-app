import Ember from 'ember';
import config from 'parent-app/config/environment';

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

        const token = this.get('session.session.content.authenticated.access_token');

        if (!formValues.uploadFile) {
          profile.setProperties(formValues);

          return profile.save().then(() => {
            this.get('flashMessages').success('Profile updated.');
            window.scrollTo(0,0);
          });
        }

        this.get('filesystem').fetch(`${config.DS.host}/profiles/${profile.id}`, {
            method: 'PATCH',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: {...formValues},
          }).then((res) => res.json())
          .then((data) => {
            this.store.pushPayload(data);
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

    updateChild(profilePromise, childValues) {
      profilePromise.then((child) => {
          child.setProperties(childValues);

          return child.save().then(() => {
            this.get('flashMessages').success('Child details updated!');
          });
        });
    },

    choosePic(formValues) {
      this.get('filesystem').prompt().then((upload) => {
        formValues.set('uploadFile', upload[0]);
      });
    },
  },
});
