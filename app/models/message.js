import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  participant: DS.belongsTo('participant'),
  conversation: DS.belongsTo('conversation'),
});
