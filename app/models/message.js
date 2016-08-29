import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  participants: DS.hasMany('participant'),
  user: DS.belongsTo('user'),
});
