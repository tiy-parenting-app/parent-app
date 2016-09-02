import DS from 'ember-data';
import Ember from 'ember';
import config from 'parent-app/config/environment';

export default DS.Model.extend({
  isParent: DS.attr('boolean'),
  userPicUrl: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  userBlurb: DS.attr('string'),
  location: DS.attr('string'),
  isLiked: DS.attr('boolean'),
  sitterRate: DS.attr('string'),
  lookingFor: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  userAbout: DS.attr('string'),
  numberIsSecret: DS.attr('boolean'),
  isConnected: DS.attr('boolean'),
  childIsUnlocked: DS.attr('boolean'),
  userPicExtension: DS.attr('string'),
  ratings: DS.hasMany('rating'),
  likes: DS.hasMany('like'),

  children: DS.hasMany('child'),

  myRating: Ember.computed.alias('ratings.lastObject'),
  myRatingValue: Ember.computed('ratings.lastObject.value', function() {
    return this.get('myRating.value') || 0;
  }),

  myLike: Ember.computed.alias('likes.lastObject'),
  isLiked: Ember.computed('likes.lastObject.value', function() {
    return this.get('myLike.like') || false;
  }),

  fullUserPicUrl: Ember.computed('userPicUrl', function() {
    const userPicUrl = this.get('userPicUrl');

    if (userPicUrl) {
      return `${config.DS.host}/images/${this.get('id')}.${this.get('userPicExtension')}`;
    }

    return 'http://placekitten.com/200/200';
  }),
});
