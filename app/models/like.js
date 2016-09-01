import DS from 'ember-data';

export default DS.Model.extend({
  like: DS.attr('boolean'),

  profile: DS.belongsTo('profile'),
});
