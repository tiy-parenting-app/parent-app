import DS from 'ember-data';

export default DS.Model.extend({
  participants: DS.hasMany('participant'),
  user: DS.belongsTo('user'),
});
