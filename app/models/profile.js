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

  children: DS.hasMany('child'),

  fullUserPicUrl: Ember.computed('userPicUrl', function() {
    const userPicUrl = this.get('userPicUrl');

    if (userPicUrl) {
      return `${config.DS.host}${this.get('userPicUrl')}`;
    }

    return 'http://placekitten.com/200/200';
  }),
});
