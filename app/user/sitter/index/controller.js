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

    workPlease(user) {
      user.get('profile').then((profile) => {
        const myLike = profile.get('myLike');
        if (myLike) {
          myLike.toggleProperty('like');
          return myLike.save();
        }

        const like = this.store.createRecord('like', {
          profile,
          like: true,
        })
        like.save();
      });
    },
  },
});
