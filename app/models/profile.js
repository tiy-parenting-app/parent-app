import DS from 'ember-data';

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
});
