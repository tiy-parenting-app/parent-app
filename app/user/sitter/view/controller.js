import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectRating(user, value) {
      user.get('profile').then((profile) => {
        const rating = this.store.createRecord('rating', {
          profile,
          value,
        })
        rating.save();
      });
    },
  },
});
