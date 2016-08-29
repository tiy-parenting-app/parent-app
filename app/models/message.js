import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  participant: DS.belongsTo('participant'),
  user: DS.belongsTo('user'),
});
